import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {
  loggedIn: boolean = false;
  email: String;
  id: string;
  username: string;
  error: boolean = false;
  errorMessage: string = 'error'
  url: string = 'http://localhost:3000/users';
  auth = new BehaviorSubject<any>((JSON.parse(localStorage.getItem('user'))));
  constructor(private route: Router, private http: Http) {

  }

  loginUser(username: string, password: string) {
    this.http.post(`${this.url}/authenticate`, { username, password })
      .subscribe((res: Response) => {
        let data = res.json();
        if (data.success) {
          console.log(data);
          this.error = false;
          this.loggedIn = true;
          this.email = data.user['email'];
          this.id = data.user['id'];
          this.username = data.user['username'];
          let localObj = {username:this.username, loggedIn:true}
          localStorage.setItem('user', JSON.stringify(localObj));
          this.auth.next(localObj);
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

  onLogout() {
    this.route.navigate(['/login']);
    this.loggedIn = false;
    localStorage.removeItem('user');
    this.auth.next(null)
  }
}