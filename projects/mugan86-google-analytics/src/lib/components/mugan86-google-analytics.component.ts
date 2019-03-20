import { GaConfigService } from './../services/ga-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mga-google-analytics',
  template: `
    <p>
      mugan86-google-analytics works!
    </p>
  `,
  styles: []
})
export class Mugan86GoogleAnalyticsComponent implements OnInit {
  constructor(private gaConfig: GaConfigService) { }

  ngOnInit() {
    console.log(this.gaConfig.analiticsId);
  }

}
