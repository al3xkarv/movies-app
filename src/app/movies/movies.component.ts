import { Component, OnInit, Input } from '@angular/core';
import {Movie} from "../movie";
// import {MOVIES} from "../mock-movies";
import {DbService} from "../services/db.service";


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];
  movie: Movie ={
    title: "Inception",
    featured: true
  }

  constructor(private dbService: DbService) { }
  @Input() featured: boolean;

  getMovies(featured: boolean): void {
    if (this.featured){
    this.movies = this.dbService.getFeaturedMovies();
    }
    else {
      this.movies = this.dbService.getMovies();
    }
  }

  ngOnInit(): void {
    this.getMovies(this.featured);
  }

}
