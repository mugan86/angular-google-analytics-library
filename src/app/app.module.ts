import { Mugan86GoogleAnalyticsModule } from 'mugan86-ng-google-analytics';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';

export const appRoutes: Routes = [
  {path: '', component: OneComponent},
  {path: 'two', component: TwoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    Mugan86GoogleAnalyticsModule.forRoot(
      {
        analyticsId: 'UA-57700600-14',
        showLog: true
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
