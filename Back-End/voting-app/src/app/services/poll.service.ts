import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable()

export class PollService{
    constructor(){
    }

    createNewPollService(data:any){
      console.log(data);
    }
    
}