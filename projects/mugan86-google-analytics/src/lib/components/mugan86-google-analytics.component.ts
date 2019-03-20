import { GaConfigService } from './../services/ga-config.service';
import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'mga-google-analytics',
  template: `
    <p>
      mugan86-google-analytics works!
    </p>
  `,
  styles: []
})
export class Mugan86GoogleAnalyticsComponent implements OnInit, AfterContentChecked {
  constructor(private gaConfig: GaConfigService, private router: Router) { }

  // https://stackoverflow.com/a/45917264
  ngOnInit() {
    const body = document.body as HTMLDivElement;
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.innerHTML = `
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', '${this.gaConfig.analiticsId}', 'auto');`;
    body.appendChild(script);
  }

  ngAfterContentChecked(): void {
    // subscribe to router events and send page views to Google Analytics
    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        if (window !== undefined) {
          (window as any).ga('set', 'page', event.urlAfterRedirects);
          (window as any).ga('send', 'pageview');
        }

      }

    });
  }

}
