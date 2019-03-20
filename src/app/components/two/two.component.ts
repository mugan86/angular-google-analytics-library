import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'projects/mugan86-google-analytics/src/lib/services/google-analytics.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  constructor(public googleAnalyticsService: GoogleAnalyticsService) { }

  ngOnInit() {
  }

  sendLikeEvent() {
    // We call the event emmiter function from our service and pass in the details
    this.googleAnalyticsService.eventEmitter('Component Two', 'like', 'userLabel', 2);
  }

}
