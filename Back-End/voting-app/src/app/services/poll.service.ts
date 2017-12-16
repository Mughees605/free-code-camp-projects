import { Injectable , OnDestroy } from "@angular/core";
import { Router } from '@angular/router';
import { Http , Response} from '@angular/http';
import { AuthService } from './auth.service';
import { ISubscription } from 'rxjs/Subscription';
import { User } from '../models/user.model';
import { CreatePoll } from '../models/newpoll.model';
@Injectable()

export class PollService implements OnDestroy{

    subscription : ISubscription;
    url: string = 'http://localhost:3000/polls';    
    constructor( public auth:AuthService, public http:Http){
    }

    createNewPollService(pollData:CreatePoll){
     this.http.post(`${this.url}/createPoll` , pollData).subscribe((res:Response)=>{
         console.log(res.json(),"from poll")
     })
    }

    ngOnDestroy(){
        if(!this.subscription.closed){
           this.subscription.unsubscribe();
        }
    }

}
