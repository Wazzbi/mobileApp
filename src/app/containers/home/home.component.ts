import { Movie } from './../../models/movie';
import { DataService } from './../../services/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { concatMap } from 'rxjs/operators';

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


  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.movieListSub = from(this.movieListRequest).pipe(
      concatMap(title => this.dataService.getMovieByTitle(title))
    ).subscribe(movie => this.movieListResponse.push(movie));
  }

  ngOnDestroy(): void {
    this.movieListSub.unsubscribe();
  }
}
