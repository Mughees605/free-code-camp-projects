import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PollService } from '../services/poll.service';
import { AuthService } from '../services/auth.service';
import { CreatePoll } from '../models/newpoll.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {

  newPoll: CreatePoll = new CreatePoll();
  constructor(private pollSer: PollService , private AuthSer: AuthService ) {
    this.newPoll.options = [{ name: '' }, { name: '' }];
    this.newPoll.title = '';
    this.newPoll.creatorId = ''
  }

  ngOnInit() {
   this.AuthSer.auth.subscribe((user:User)=>{
    this.newPoll.creatorId = user.id;
   })
  }

  addOption() {
    this.newPoll.options.push({ name: '' })
  }

  createPoll() {
    this.pollSer.createNewPollService(this.newPoll);  
    this.reset()  
  }

  reset(){
    this.newPoll.options = [{ name: '' }, { name: '' }];
    this.newPoll.title = ''
  }

}
