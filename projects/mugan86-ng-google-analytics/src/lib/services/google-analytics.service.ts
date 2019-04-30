import { Injectable } from '@angular/core';

declare let ga: any; // Declare ga as a function

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  /**
   * create our event emitter to send our data to Google Analytics
   * @param eventCategory Event category to use filt in GA Panel
   * @param eventAction Event action to use filt in GA Panel
   * @param eventLabel Event label to use filt in GA Panel
   * @param eventValue Event value ID
   */
  eventEmitter(eventCategory: string, eventAction: string, eventLabel: string = null, eventValue: number = null) {
    ga('send', 'event', {
      eventCategory,
      eventLabel,
      eventAction,
      eventValue
    });

  }
}
