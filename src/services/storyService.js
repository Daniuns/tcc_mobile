import rxjs, { BehaviorSubject, interval, combineLatest, Subscription } from "rxjs";
import stories from '../stories';
import { bindComponent } from "../operators/bindComponent";
import {
    accelerometer,
    gyroscope,
    setUpdateIntervalForType,
    SensorTypes
  } from "react-native-sensors";
import { distinctUntilChanged, map, filter } from "rxjs/operators";

// const stories = require('../stories.json');



export class StoryService {
    story$ = new BehaviorSubject(stories[0]);
    actualVertice$ = new BehaviorSubject(stories[0].vertices[0]);
    subscriptionAccelerometer$ = new Subscription;
    
    getStory() {
        return this.story$.asObservable();
    }
    
    setStory(story){
        this.story$.next(story);
    }

    getActualVertice(){
        return this.actualVertice$.asObservable();
    }

    nextVertice(destiny) {
        this.getStory()
            .pipe(bindComponent(this))
            .subscribe(story => {
                const vertice = story.vertices.filter(vertice => vertice.value === destiny);
                this.actualVertice$.next(vertice[0]);
            })
        }
        
    //     wakeUp(){
    //         // setUpdateIntervalForType(SensorTypes.Accelerometer, 400); // defaults to 100ms
    //         const subscription = accelerometer
    //         .pipe(
    //             map(values => Math.abs((values.x + values.y + values.z).toFixed(0))),
    //             filter(speed => speed > 15),
    //                 distinctUntilChanged()
    //             );
        
    //      this.subscriptionAccelerometer$ = subscription;

        
    //             if(true){
    //                 // this.subscriptionAccelerometer.unsubscribe();
    //             }
    //     return this.subscriptionAccelerometer$;
    // }
}

export const StoryServiceFactory = () => new StoryService();

export const storyService = StoryServiceFactory();