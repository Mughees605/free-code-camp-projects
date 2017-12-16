import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PollService } from '../../services/poll.service';
import { ISubscription } from 'rxjs/Subscription';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-mypoll',
  templateUrl: './mypoll.component.html',
  styleUrls: ['./mypoll.component.css']
})
export class MypollComponent implements OnInit {

  subscription: ISubscription
  constructor(private authSer: AuthService, private pollSer: PollService) {
    this.authSer.auth.subscribe((user: User) => {
      
    })
  }

  ngOnInit() {
  }

}
