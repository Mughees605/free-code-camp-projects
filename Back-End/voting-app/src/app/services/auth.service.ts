import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService{
    loggedIn : Boolean = false;
    email:String = "mughees"
    error: boolean = false;
    errorMessage : string = 'error'
    constructor(private route:Router){

    }

    loginUser(email:string, password:string){
      if(email && password){
         this.route.navigate(['/create-poll']);
      }
    }

    isAuthenticated() {
        return this.loggedIn;
      }
}