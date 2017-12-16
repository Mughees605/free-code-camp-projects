import { Component, OnInit } from '@angular/core';
import { PollService } from '../services/poll.service';
import { CreatePoll } from '../models/newpoll.model';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allPolls$: Observable<CreatePoll[]>
  constructor(private pollSer: PollService) {

  }

  ngOnInit() {
    this.allPolls$ = this.pollSer.getAll()
  }

}
