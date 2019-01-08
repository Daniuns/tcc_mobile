import rxjs, { BehaviorSubject } from "rxjs";
import { take } from 'rxjs/operators';
import { bindComponent } from "../operators/bindComponent";

export class RelatoryService {
    relatory$ = new BehaviorSubject([]);

    getRelatory() {
        return this.relatory$.asObservable();
    }

    setRelatory(data){
        this.getRelatory()
        .pipe(
            take(1), 
            bindComponent(this)
        ).subscribe(relatory => {
            this.relatory$.next([...relatory, data ])
        })
    }

    sendRelatory() {
        this.getRelatory()
        .pipe(
            take(1),
            bindComponent(this)
        ).subscribe(relatory => {
            console.log(relatory);
            this.relatory$.next([]);
        })
    }
}

export const RelatoryServiceFactory = () => new RelatoryService();

export const relatoryService = RelatoryServiceFactory();