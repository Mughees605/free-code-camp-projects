import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean;
  username: string;
  constructor( private auth:AuthService) { }

  ngOnInit() {
    this.auth.auth.subscribe((res)=>{
     if(res){
      let data = res;      
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
}
