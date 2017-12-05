import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PollService } from '../services/poll.service';
import { CreatePoll } from '../models/newpoll.model';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {

  constructor(public poll:PollService) { }

  ngOnInit() {
  }

  createPoll(f:NgForm){
    let options = [];
    let question:string = f.value.question;
    for (var key in f.value){
      if( key !== 'question'){
         options.push(f.value[key])
      }
    }    
    let createPoll = new CreatePoll(question , options)
    this.poll.createNewPollService(createPoll);
    f.reset();
  }

}
