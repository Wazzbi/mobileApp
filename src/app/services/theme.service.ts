import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  _isDarkTheme = new Subject<boolean>();
  // zabalení subjektu do observable způsobí, že nelze použít next z venčí
  isDarkTheme$ = this._isDarkTheme.asObservable();

  setDarkTheme(isDarkTheme: boolean): void {
    this._isDarkTheme.next(isDarkTheme);
  }
}
