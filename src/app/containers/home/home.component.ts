import { Movie } from './../../models/movie';
import { DataService } from './../../services/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, Subscription, Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // TODO: zatím jen takhle načtený úvodní filmy
  movieListRequest = ['Joker', 'Top Gun', 'Rain man'];
  movieListResponse: Movie[] = [];
  movieListSub: Subscription;
  cardState: string = 'initial';
  isDarkTheme$: Observable<boolean>;


  constructor(private dataService: DataService, private themeService: ThemeService) { }
  
  ngOnInit() {
    this.movieListSub = from(this.movieListRequest).pipe(
      concatMap(title => this.dataService.getMovieByTitle(title))
    ).subscribe(movie => this.movieListResponse.push(movie));

    this.isDarkTheme$ = this.themeService.isDarkTheme;
  }

  ngOnDestroy(): void {
    this.movieListSub.unsubscribe();
  }


}
