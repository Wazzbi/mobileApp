import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { Observable, Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mobileApp';
  width: number;

  isDarkTheme$: Observable<boolean>;

  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.isDarkTheme$ = this.themeService.isDarkTheme$;
    /* // TODO: toto by mohla být observable když otočíš tablet, mobil atd (viz oblíbené v stackoverflow)
    this.width = window.innerWidth ? window.innerWidth : screen.width; */

    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      console.log('event: ', evt);
    });
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
}
}
