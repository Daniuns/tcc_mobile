import rxjs, { BehaviorSubject } from "rxjs";
import Sound from 'react-native-sound';
import {filter} from 'rxjs/operators'

Sound.setCategory('Playback');



export class AudioService {
    audios$ = new BehaviorSubject([]);

    setAudio(audios) {

        const allAudios = [];
            audios.map(audioText => {
                console.log(audioText)
                const newSound = new Sound(audioText, Sound.MAIN_BUNDLE, (error) => {  
                    
                    if(error){
                        console.log('error on load the audio');
                    }

                    newSound.setNumberOfLoops(-1);
                });
                    console.log('teste', newSound);

                allAudios.push(newSound);
            })

            this.audios$.next(allAudios);
    }

    playAudio(){
        this.getAudio()
            .subscribe(audios => {
                audios.map(audio => {
                    console.log('myAudio', audio);
                    setTimeout(() => {
                        audio.play(success => {
                                if (success) {
                                    console.log('successfully finished playing');
                                  } else {
                                    console.log('playback failed due to audio decoding errors');
                                  }
                            });
                    }, 500)
                })
            })
    }

    stopActualAudios(){
        this.getAudio()
            .subscribe(audios => {
                audios.map(audio => {
                        audio.stop();
                })
            })
    }

    getAudio(){
        return this.audios$.asObservable()
    }
}

export const AudioServiceFactory = () => new AudioService();

export const audioService = AudioServiceFactory();