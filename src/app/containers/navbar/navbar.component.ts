import { Component, OnInit, Output, EventEmitter, AfterViewInit, HostBinding } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { throttleTime, map, pairwise, distinctUntilChanged, share, filter } from 'rxjs/operators';

enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  /* styles: [
    `
      :host {
        // position: fixed;
        // top: 0;
        // width: 100%;
        // z-index: 1000;
      }
    `
  ],
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({ opacity: 0, transform: 'translateY(-100%)' })
      ),
      state(
        VisibilityState.Visible,
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('200ms ease-in'))
    ])
  ] */
})
export class NavbarComponent implements OnInit {
  @Output() menu = new EventEmitter();

  isDarkTheme$: Observable<boolean>;
  isDarkTheme2: boolean;
  private isVisible = true;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.isDarkTheme$ = this.themeService.isDarkTheme$;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  /* @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );

    const scrollUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const scrollDown = scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );

    scrollUp$.subscribe(() => (this.isVisible = true));
    scrollDown.subscribe(() => (this.isVisible = false));
  } */

}
