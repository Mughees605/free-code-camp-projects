import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Injectable()
export class AuthService{
    loggedIn : Boolean = false;
    email:String = "mughees"
    error: boolean = false;
    errorMessage : string = 'error'
    constructor(private route:Router, private http: Http){

    }

    loginUser(email:string, password:string){
      if(email && password){
         this.route.navigate(['/create-poll']);
      }
    }

    createUser(email:string, password:string, username:string){
      this.http.post('http://localhost:3000/users/register' , {email,password,username})
      .subscribe((res:any)=>{
         console.log(res);
      },(err)=>{
        console.log(err)
      })
    }

    isAuthenticated() {
        return this.loggedIn;
      }
}