import { GaConfigService } from './services/ga-config.service';
import { NgModule } from '@angular/core';
import { Mugan86GoogleAnalyticsComponent } from './components/mugan86-google-analytics.component';

@NgModule({
  declarations: [Mugan86GoogleAnalyticsComponent],
  imports: [
  ],
  exports: [Mugan86GoogleAnalyticsComponent]
})
export class Mugan86GoogleAnalyticsModule {
  public static forRoot(analyticsId: string) {
    return {
      ngModule: Mugan86GoogleAnalyticsModule,
      providers: [
        GaConfigService,
        {
          provide: 'analiticsId',
          useValue: analyticsId
        }
]
    };

  }
}
