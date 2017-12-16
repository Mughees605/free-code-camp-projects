import { Component, OnInit } from '@angular/core';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private pollSer:PollService) { }

  ngOnInit() {
    this.pollSer.getAll().subscribe((res)=>{
      console.log(res);
    })
  }

}
