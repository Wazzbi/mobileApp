import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mobileApp';
  width: number;

  isDarkTheme$: Observable<boolean>;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.isDarkTheme$ = this.themeService.isDarkTheme;
    // TODO: toto by mohla být observable když otočíš tablet, mobil atd (viz oblíbené v stackoverflow)
    this.width = window.innerWidth ? window.innerWidth : screen.width;
  }
}
