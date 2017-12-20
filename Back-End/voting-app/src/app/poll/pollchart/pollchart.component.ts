import { Component, OnInit } from '@angular/core';
import { PollService } from '../../services/poll.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pollchart',
  templateUrl: './pollchart.component.html',
  styleUrls: ['./pollchart.component.css']
})
export class PollchartComponent implements OnInit {

  pollId:string;
  constructor( private route:ActivatedRoute, private pollService:PollService) { }

  ngOnInit() {
    this.pollId =  this.route.snapshot.params['id'];
    this.pollService.getPoll(this.pollId).subscribe((res)=>{
      console.log(res,"poll chart")
    })
  }

}
