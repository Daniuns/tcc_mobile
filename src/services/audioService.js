import rxjs, { BehaviorSubject } from "rxjs";
import Sound from 'react-native-sound';
import {filter, of} from 'rxjs/operators'
import { bindComponent } from '../operators/bindComponent';

Sound.setCategory('Playback');



export class AudioService {
    audiosScene$ = new BehaviorSubject([]);
    descriptionScene$ = new BehaviorSubject({});
    durationScene$ = new BehaviorSubject(undefined);

    setDurationDescription = (duration) => {
        this.durationScene$.next(duration);
    }

    getDurationScene = () => {
        return this.durationScene$.asObservable();
    }

    setAudiosDescriptionScene = (a) => {

        const newAudio = new Sound(a.audio, Sound.MAIN_BUNDLE, (error) => {  
                    
            if(error){
                console.log('error on load the audio');
            }
            if(a.repeat){
                newAudio.setNumberOfLoops(a.repeat);
            }

            this.setDurationDescription(newAudio.getDuration());
        });

        this.descriptionScene$.next(newAudio);

        this.playDescriptionScene();
    }

    playDescriptionScene = () => {
        this.getDescriptionScene()
            .subscribe(audio => {
                setTimeout(() => {
                    audio.setVolume(0).play(success => {
                            if (success) {
                                console.log('successfully finished playing');
                              } else {
                                console.log('playback failed due to audio decoding errors');
                              }
                        });
                }, 500)
            });
    }


    getDescriptionScene = () => {
        return this.descriptionScene$.asObservable()
    }


    setAudiosScene = (audios) => {
        console.log(audios)
        const allAudios = [];
            audios.map(a => {
                const newAudio = new Sound(a.audio, Sound.MAIN_BUNDLE, (error) => {  
                    
                    if(error){
                        console.log('error on load the audio');
                    }
                    if(a.repeat){
                        newAudio.setNumberOfLoops(a.repeat);
                    }

                    newAudio.setVolume(a.volume);

                });
                allAudios.push(newAudio);
            })

            this.audiosScene$.next(allAudios);

            audioService.playAudiosScene()

    }

    playAudiosScene = () => {
        this.getAudioScene()
            .pipe(bindComponent(this))
                .subscribe(audios => {
                    console.log('audios', audios);
                    audios.map(audio => {
                        setTimeout(() => {
                            console.log('aud', audio.getVolume());
                            console.log('aud', audio);
                        audio.setVolume(audio.getVolume()).play(success => {
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

    stopActualAudiosScene = () => {
        this.getAudioScene()
            .pipe(bindComponent(this))
                .subscribe(audios => {
                audios.map(audio => {
                        audio.stop();
                })
            })
    }

    getAudioScene = () => {
        return this.audiosScene$.asObservable()
    }

    playAgain = () => {

    }
}

export const AudioServiceFactory = () => new AudioService();

export const audioService = AudioServiceFactory();