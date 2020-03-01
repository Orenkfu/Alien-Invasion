import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  theme = "light";
  constructor(private router: Router, private titleService: Title, private route: ActivatedRoute) { };
  ngOnInit(): void {
    //This code is subscribed to all route events
    this.router.events
      .pipe(
        //only interested in end of navigation
        filter(event => event instanceof NavigationEnd),
        map(() => this.route),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter(route => route.outlet == 'primary'),
        //data specified in app-routing module
        mergeMap(route => route.data)
      )
      .subscribe((event) => {
        //pushing router event to google analytics
        //sets title!
        this.titleService.setTitle(`${event.title} - Alien Invasion`);
        //checks for token expiry!
        //  if (event.tokenized) {
        //    this.auth.expireToken(this.storage.token);
        //  }

      });
  }

}
