import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( public auth:AuthService) { }

  ngOnInit() {
  }

  onRegister(data: NgForm) {
    const email: string = data.value.email;
    const password: string= data.value.password;
    const username: string = data.value.username
     this.auth.createUser(email, password, username);
    data.reset();
 }

}
