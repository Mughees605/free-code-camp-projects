import { Component, OnInit } from '@angular/core';
import { PollService } from '../../services/poll.service';
import { ActivatedRoute } from '@angular/router';
import { CreatePoll } from '../../models/newpoll.model';

@Component({
  selector: 'app-pollchart',
  templateUrl: './pollchart.component.html',
  styleUrls: ['./pollchart.component.css']
})
export class PollchartComponent implements OnInit {

  pollId: string;
  poll: any = [];
  optionName: string[] = [];
  votes: number[] = [];
  constructor(private route: ActivatedRoute, private pollService: PollService) { }

  ngOnInit() {
    this.pollId = this.route.snapshot.params['id'];
    this.pollService.getPoll(this.pollId).subscribe((poll) => {
      this.poll = poll;

      if (this.poll && this.poll.options.length > 0) {
        this.setOptionName();
        this.setVotes();
      }
    })
  }

  private setOptionName() {
    this.optionName = this.poll.options.map((option) => {
      return option.name;
    })
  }

  private setVotes() {
    this.votes = this.poll.options.map((option) => {
      return option.votes.length;
    })
  }

}
