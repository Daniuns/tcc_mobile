import rxjs, { BehaviorSubject } from "rxjs";
import { take, combineLatest } from 'rxjs/operators';
import { bindComponent } from "../operators/bindComponent";
import axios from 'axios';
import { playerService } from "./playerService";

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

    sendRelatory = async () => {
        this.getRelatory()
        .pipe(
            take(1),
            combineLatest(playerService.getInformationsPlayer()),
            bindComponent(this)
        ).subscribe(async ([relatory, player]) => {
            const response = await axios({
                method: 'post',
                url: 'http://192.168.100.19:3000/email/send',
                data: { 
                    relatory, 
                    player
                 }
                });
                console.log('resp', response);
            this.relatory$.next([]);
        })
    }
}

export const RelatoryServiceFactory = () => new RelatoryService();

export const relatoryService = RelatoryServiceFactory();