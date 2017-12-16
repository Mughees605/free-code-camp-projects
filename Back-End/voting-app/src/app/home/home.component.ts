import { Component, OnInit } from '@angular/core';
import { PollService } from '../services/poll.service';
import { CreatePoll } from '../models/newpoll.model';
import { ISubscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  allPolls : CreatePoll[] 
  constructor(private pollSer:PollService) { }

  ngOnInit() {
    this.pollSer.getAll().subscribe((poll : CreatePoll[])=>{
      this.allPolls = poll;
    })
  }

}
