import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-poll-posted',
  templateUrl: './poll-posted.component.html',
  styleUrls: ['./poll-posted.component.css']
})
export class PollPostedComponent implements OnInit, OnDestroy {

  pollId: string
  subscription:ISubscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   this.subscription =  this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.pollId = params['id'];
      }
    })
  }

  ngOnDestroy() {
    if(!this.subscription.closed){
      this.subscription.unsubscribe();
    }
  }



}
