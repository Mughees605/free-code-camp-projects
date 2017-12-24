import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import * as config from '../../../config.json';


@Injectable()
export class AuthService {
  loggedIn: boolean = false;
  email: String;
  id: string;
  username: string;
  error: boolean = false;
  errorMessage: string = 'error'
  url: string = '';
  auth = new BehaviorSubject<any>(this.getLocalStorage());
  constructor(private route: Router, private http: Http) {
    if(window.location.hostname === 'localhost' && window.location.port === '4200'){
      this.url = `http://localhost:8485`
    }
  }

  loginUser(username: string, password: string) {
    this.http.post(`${this.url}/users/authenticate`, { username, password })
      .subscribe((res: Response) => {
        let data = res.json();
        if (data.success) {
          this.error = false;
          this.loggedIn = true;
          this.email = data.user['email'];
          this.id = data.user['id'];
          this.username = data.user['username'];
          let localObj = {username:this.username, loggedIn:true , id:this.id , token:data['token']};
          this.setLocalStorage(localObj);
          this.auth.next(localObj);
          this.route.navigate(['/poll']);
        }
        else {
          this.error = true;
          this.errorMessage = data.msg
          this.clearLocalStorage();
        }
      }, (err: Error) => {
        this.error = true;
        this.errorMessage = err.message;
      })
  }

  createUser(email: string, password: string, username: string) {
    this.http.post(`${this.url}/users/register`, { email, password, username })
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
    this.auth.next(false);
    this.clearLocalStorage();
  }

  setLocalStorage(localObj){
    localStorage.setItem('user', JSON.stringify(localObj));
  }

  clearLocalStorage(){
    localStorage.removeItem('user');
  }

  getLocalStorage(){
    return JSON.parse(localStorage.getItem('user'))
  }

}
