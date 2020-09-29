import { Injectable } from '@angular/core';
import {Movie} from "../movie";
import {MOVIES} from "../mock-movies";


@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  getMovies(): Movie[] {
    return MOVIES;
  }

  getFeaturedMovies(): Movie[]{
    let tempMovies = [];

    MOVIES.forEach(movie => {
      if (movie.featured){
        tempMovies.push(movie);
      }
    });
    return tempMovies;
  }
}
