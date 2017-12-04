import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";


@Injectable()
export class AuthService{
    loggedIn : Boolean = false;
    email:String = "mughees"
    error: boolean = false;
    errorMessage : string = 'error'
    constructor(){

    }
}