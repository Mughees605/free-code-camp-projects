import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';

@Injectable()
export class AuthService {
  loggedIn: boolean = false;
  email: String;
  id: string;
  username: string;
  error: boolean = false;
  errorMessage: string = 'error'
  url: string = 'http://localhost:3000/users';

  constructor(private route: Router, private http: Http) {

  }

  loginUser(username: string, password: string) {
    this.http.post(`${this.url}/authenticate`, { username, password })
      .subscribe((res: any) => {
        let data = JSON.parse(res._body);
        if (data.success) {
          this.error = false;
          this.loggedIn = true;
          this.email = data.user['email'];
          this.id = data.user['id'];
          this.username = data.user['username'];
          localStorage.setItem('id' , `${this.id}`);
          this.route.navigate(['/create-poll']);
        }
        else {
          this.error = true;
          this.errorMessage = data.msg
        }
      }, (err: Error) => {
        this.error = true;
        this.errorMessage = err.message;
      })
  }

  createUser(email: string, password: string, username: string) {
    this.http.post(`${this.url}/register`, { email, password, username })
      .subscribe((res: any) => {
        this.route.navigate(['/login']);
      }, (err) => {
        console.log(err)
      })
  }

  isAuthenticated() {
    return this.loggedIn;
  }

  onLogout(){
    this.route.navigate(['/login']);
    this.loggedIn = false;
    localStorage.removeItem('id');
  }
}