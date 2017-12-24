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
import 'rxjs/add/observable/throw';
// import * as config from '../../../config.json';



@Injectable()

export class PollService implements OnDestroy {

  subscription: ISubscription;
  url: string = '';
  constructor(public auth: AuthService, public http: Http) {
    if(window.location.hostname === "localhost" && window.location.port === "4200"){
      this.url = `http://localhost:8485`
    }
  }

  createNewPollService(pollData: CreatePoll): Observable<CreatePoll> {
    return this.http.post(`${this.url}/polls/createPoll`, pollData)
      .map(res => res.json())
      .catch(err => err)
  }

  myPolls(userid: string): Observable<CreatePoll[]> {
    return this.http.get(`${this.url}/${userid}/polls/mypolls`)
      .map(res => res.json())
      .catch(err => err)
  }

  getAll(): Observable<CreatePoll[]> {
    return this.http.get(`${this.url}/polls/getAll`)
      .map(res => res.json())
  }

  getPoll(pollId: string): Observable<CreatePoll> {
    return this.http.get(`${this.url}/polls/${pollId}`)
      .map(res => res.json())
  }

  addVote(pollId, optionId): Observable<CreatePoll> {
    return this.http.get(`${this.url}/polls/${pollId}/options/${optionId}/vote`)
      .map(res => res.json())
      .catch(err => Observable.throw(JSON.parse(err._body)))
  }

  ngOnDestroy() {
    if (!this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

}
