import { Component, OnInit, OnDestroy } from '@angular/core';
import { PollService } from '../../services/poll.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CreatePoll } from '../../models/newpoll.model';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.css']
})
export class PollDetailComponent implements OnInit, OnDestroy {

  poll$: Observable<CreatePoll>
  pollId: string;
  subcription: ISubscription[] = [];

  constructor(private pollSer: PollService, private routes: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subcription.push(
      this.routes.params.subscribe((params: Params) => {
        this.pollId = params["id"];
        this.poll$ = this.pollSer.getPoll(this.pollId);
      })
    )
  }

  selectedOption(data, pollId) {
    this.subcription.push(
      this.pollSer.addVote(pollId, data._id).subscribe((res) => {
        this.router.navigate(['/poll', 'chart', this.pollId])
      }, (err) => {
        this.router.navigate(['/poll', 'chart', this.pollId])
      })
    )
  }

  ngOnDestroy() {
    this.subcription.map((d) => {
      if (!d.closed) {
        d.unsubscribe();
      }
    })
  }

}
