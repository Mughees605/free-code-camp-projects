import { Injectable, OnDestroy } from "@angular/core";
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { AuthService } from './auth.service';
import { ISubscription } from 'rxjs/Subscription';
import { User } from '../models/user.model';
import { CreatePoll } from '../models/newpoll.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class PollService implements OnDestroy {

    subscription: ISubscription;
    url: string = 'http://localhost:3000/polls';
    constructor(public auth: AuthService, public http: Http) {
    }

    createNewPollService(pollData: CreatePoll): Observable<CreatePoll> {
        return this.http.post(`${this.url}/createPoll`, pollData)
            .map(res => res.json())
            .catch(err => err)
    }

    myPolls(userid: string): Observable<CreatePoll[]> {
        return this.http.get(`${this.url}/myPoll`)
            .map(res => res.json())
            .catch(err => err)
    }

    getAll(): Observable<CreatePoll[]> {
        return this.http.get(`${this.url}/getAll`)
            .map(res => res.json())
            .catch(err => err)
    }

    ngOnDestroy() {
        if (!this.subscription.closed) {
            this.subscription.unsubscribe();
        }
    }

}
