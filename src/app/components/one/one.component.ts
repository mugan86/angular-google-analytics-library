import { Component } from '@angular/core';
import { GoogleAnalyticsService } from 'projects/mugan86-google-analytics/src/lib/services/google-analytics.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {

  constructor(public googleAnalyticsService: GoogleAnalyticsService) { }

  sendLikeEvent() {
    // We call the event emmiter function from our service and pass in the details
    this.googleAnalyticsService.eventEmitter('userPage', 'Follow User', 'userLabel', 1);
  }

}
