import { Injectable, Inject } from '@angular/core';
import { Config } from '../interfaces/config.interface';

@Injectable({
  providedIn: 'root'
})
export class GaConfigService {
  analiticsId: string;
  showLog: boolean;
  constructor(@Inject('analyticsConfig') private analytics: Config) {
    this.analiticsId = this.analytics.analyticsId;
    this.showLog = this.analytics.showLog;
    if (this.showLog) {
      console.log('Analytics ID: ', this.analiticsId);
    }
  }
}
