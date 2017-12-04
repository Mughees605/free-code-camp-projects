import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public auth : AuthService) { }

  ngOnInit() {
  }
   
  onLogin(data: NgForm) {
    const email: string = data.value.email;
    const password: string = data.value.password;
    // this.auth.loginUser(email, password);
    data.reset();
  }
}
