import { Component, OnInit } from '@angular/core';
import { PollService } from '../../services/poll.service';

@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.css']
})
export class PollDetailComponent implements OnInit {

  constructor( private pollSer : PollService) { }

  ngOnInit() {
    this.pollSer.getPoll().subscribe((res)=>{
       console.log(res,"fasdfasdfasf");
    })
  }

}
