import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';

declare let ga: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentChecked {
  title = 'angularGoogleAnalytics';

  constructor(public router: Router) {
    /*const body = document.body as HTMLDivElement;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-57700600-14';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-57700600-14');
    `;
    body.appendChild(script2);*/
  }

  // https://stackoverflow.com/a/45917264
  ngOnInit() {

    const body = document.body as HTMLDivElement;
    const script = document.createElement('script');
    script.innerHTML = `
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-57700600-14', 'auto');`;
    script.async = true;
    script.defer = true;
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
