import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PollService } from '../../services/poll.service';
import { AuthService } from '../../services/auth.service';
import { CreatePoll } from '../../models/newpoll.model';
import { User } from '../../models/user.model';
import { ISubscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit, OnDestroy {
  subscription: ISubscription;
  newPoll: CreatePoll = new CreatePoll();
  constructor(private pollSer: PollService, private AuthSer: AuthService, private router:Router) {
    this.newPoll.options = [{ name: '' }, { name: '' }];
    this.newPoll.title = '';
    this.newPoll.creatorId = ''
  }

  ngOnInit() {
    this.subscription = this.AuthSer.auth.subscribe((user: User) => {
      if (user["id"]) {
        this.newPoll.creatorId = user.id;
      }
    })
  }

  addOption() {
    this.newPoll.options.push({ name: '' })
  }

  createPoll() {
    this.pollSer.createNewPollService(this.newPoll).subscribe((poll: CreatePoll)=>{
     this.router.navigate(['poll', poll._id, 'poll-detail'])
    });
    this.reset()
  }

  reset() {
    this.newPoll.options = [{ name: '' }, { name: '' }];
    this.newPoll.title = ''
  }

  ngOnDestroy() {
    if (!this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

}
