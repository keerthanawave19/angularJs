import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class MoviesService {
  constructor(private http: Http) {}
  myMovieSearch(x: string) {
  return this.http.get ('http://www.omdbapi.com/?s=' + x)
               .map (response => response.json().Search) ;
  }
}

