import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy {
  loggedIn: boolean;
  username: string;
  subscription : ISubscription;

  constructor( private auth:AuthService) { }

  ngOnInit() {
    this.subscription = this.auth.auth.subscribe((user : User)=>{
     if(user){
      let data = user;
       this.loggedIn = data['loggedIn'];
       this.username = data['username'];
     }
     else{
       this.loggedIn = false;
     }
    })
  }

  onLogout(){
   this.auth.onLogout();
  }

  ngOnDestroy(){
    if(!this.subscription.closed){
      this.subscription.unsubscribe();
    }
  }
}
