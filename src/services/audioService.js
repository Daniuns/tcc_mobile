import rxjs, { BehaviorSubject, Observable, interval } from "rxjs";
import Sound from 'react-native-sound';
import {filter, of, take, combineAll, combineLatest, switchMap, distinctUntilChanged} from 'rxjs/operators'
import { bindComponent } from '../operators/bindComponent';
import {DESCRIPTION_SCENE_AUDIOS, SCENE_AUDIOS} from '../../audios';
import { storyService } from "./storyService";
import { playerService } from "./playerService";

import TrackPlayer  from 'react-native-track-player';
TrackPlayer.setupPlayer().then(async () => {
});

// TrackPlayer.add(DESCRIPTION_SCENE_AUDIOS);
// TrackPlayer.play();
Sound.setCategory('Playback');



export class AudioService {
    audiosScene$ = new BehaviorSubject([]);
    descriptionScene$ = new BehaviorSubject({});
    isAudioPlaying$ = new BehaviorSubject(true);
    durationScene$ = new BehaviorSubject(undefined);

    setDurationDescription = (duration) => {
        this.durationScene$.next(duration);
    }

    getDurationScene = () => {
        return this.durationScene$.asObservable();
    }

     setIsAudioPlaying = (boolean) => {
        this.isAudioPlaying$.next(boolean);
    }

    isAudioPlaying = () => {
        return this.isAudioPlaying$.asObservable();
    }

    
    playAudiosScene = (vertice) => {
        const audio = vertice.midia.audiosScene.map(a => {
            return SCENE_AUDIOS.find(scene_audio => scene_audio.name == a.audio)
        })

        audio.map(a => {
            a.audio.setNumberOfLoops(2).play(success => {
                if (success) {
                    console.log('successfully finished playing');
                    } else {
                    console.log('Falhou para reproduzir som ambiente');
                    }
            })
        })
    }

    stopAudiosScene = (vertice) => {
        const audio = vertice.midia.audiosScene.map(a => {
            return SCENE_AUDIOS.find(scene_audio => scene_audio.name == a.audio)
        })

        audio.map(a => {
            a.audio.stop()
        })
    }

    changeTrack = () => {
        TrackPlayer.getCurrentTrack().then(t => {
            TrackPlayer.remove(t);
        });

    }

    verifyStateTrack = () => {
        return interval(500)
        .pipe(
            filter(t => !!t),
            switchMap(t => {
                return TrackPlayer.getState().then(state => state);
            }),
            distinctUntilChanged((a, b) => JSON.parse(JSON.stringify(a)) == JSON.parse(JSON.stringify(b)))
        )
    }



    playDescriptionScene = (vertice, character) => {

        TrackPlayer.getQueue().then(q => console.log('queuee', q));
        
        if(character == 'pedrinho'){
            const track = DESCRIPTION_SCENE_AUDIOS.find(audio => audio.id == vertice.midia.descriptionScene.audioP);

            TrackPlayer.add([track]).then(() => {
                TrackPlayer.play().then(async () => {
                    try{
                        console.log('sucess');
                    }catch(err){
                        console.log(err);
                    }
                });
            })
        }
        if(character == 'aninha'){
            const track = DESCRIPTION_SCENE_AUDIOS.find(audio => audio.id == vertice.midia.descriptionScene.audioA);

            TrackPlayer.add([track]).then(() => {
                TrackPlayer.play().then(async () => {
                    try{
                        console.log('sucess');
                    }catch(err){
                        console.log(err);
                    }
                });
            })
        }
    }

    destroy = () => {
        TrackPlayer.destroy();
    }

}

export const AudioServiceFactory = () => new AudioService();

export const audioService = AudioServiceFactory();
TrackPlayer.registerEventHandler(require('../../player-handler.js'));