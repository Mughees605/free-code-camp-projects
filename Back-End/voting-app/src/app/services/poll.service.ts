import { Injectable , OnDestroy } from "@angular/core";
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ISubscription } from 'rxjs/Subscription';
import { User } from '../models/user.model';

@Injectable()

export class PollService implements OnDestroy{

    subscription : ISubscription;
    constructor( public auth:AuthService){
    }

    createNewPollService(data:any){

     this.subscription = this.auth.auth.subscribe((user: User)=>{
        console.log(user);
      })
    }

    ngOnDestroy(){
        if(!this.subscription.closed){
           this.subscription.unsubscribe();
        }
    }

}
