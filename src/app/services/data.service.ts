import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=81ef110f';

  constructor(private http: HttpClient) { }

  // might match mutiple times like Batman, LOTR etc...
  searchMovieByTitle(title: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl + '&s=' + title);
  }

  // get detail of selected movie via ID
  getMovieByImdbId(id: string): Observable<Movie> {
    return this.http.get<Movie>(this.baseUrl + '&i=' + id + '&plot=full');
  }

  // get detail of selected movie via title
  getMovieByTitle(title: string): Observable<Movie> {
    return this.http.get<Movie>(this.baseUrl + '&t=' + title + '&plot=full');
  }

}
