import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PollService } from '../../services/poll.service';
import { ISubscription } from 'rxjs/Subscription';
import { CreatePoll } from '../../models/newpoll.model';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-mypoll',
  templateUrl: './mypoll.component.html',
  styleUrls: ['./mypoll.component.css']
})
export class MypollComponent implements OnInit {

  subscription: ISubscription;
  uid :string;
  mypoll$ : Observable<CreatePoll[]>;
  constructor(private authSer: AuthService, private pollSer: PollService) {
    this.authSer.auth.subscribe((user: User) => {
      this.uid = user['id'];
    })
  }

  ngOnInit() {
   this.mypoll$ = this.pollSer.myPolls(this.uid)
  }

}
