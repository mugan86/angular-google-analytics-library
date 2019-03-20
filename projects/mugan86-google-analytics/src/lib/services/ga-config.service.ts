import { Injectable, Inject } from '@angular/core';
import { Config } from '../interfaces/config.interface';

@Injectable({
  providedIn: 'root'
})
export class GaConfigService {
  analiticsId: string;
  constructor(@Inject('analyticsConfig') private analytics: Config) {
    this.analiticsId = this.analytics.analyticsId;
    if (this.analytics.showLog) {
      console.log('Analytics ID: ', this.analiticsId);
    }
  }
}
