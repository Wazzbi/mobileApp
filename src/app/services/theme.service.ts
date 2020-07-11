import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkTheme = new Subject<boolean>();

  setDarkTheme(isDarkTheme: boolean): void {
    this.isDarkTheme.next(isDarkTheme);
  }
}
