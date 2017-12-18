import { Component, OnInit } from '@angular/core';
import { PollService } from '../../services/poll.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CreatePoll } from '../../models/newpoll.model';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.css']
})
export class PollDetailComponent implements OnInit {

  poll$: Observable<CreatePoll> 

  constructor(private pollSer: PollService, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.subscribe((params: Params) => {
      this.poll$ = this.pollSer.getPoll(params['id']);
    })
  }

}
