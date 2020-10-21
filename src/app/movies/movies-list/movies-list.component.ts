import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Movie } from "../movie";
import {
  deleteMovie,
  fetchMovies,
  searchMovies,
  addMovie,
  updateMovie,
} from "../store/movies.actions";
import { moviesSelector } from "../store/movies.selectors";

@Component({
  selector: "app-movies-list",
  templateUrl: "./movies-list.component.html",
  styleUrls: ["./movies-list.component.css"],
})
export class MoviesListComponent implements OnInit {
  searchTerm = "";
  addTitle = "";
  title = "Title to update";
  updateValue = "Updated value";
  movies$: Observable<Movie[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fetchMovies());
    this.movies$ = this.store.select(moviesSelector);
  }

  deleteMovie(title: string) {
    const deleteMovieObj = deleteMovie({ title });
    this.store.dispatch(deleteMovieObj);
  }

  addMovie(title: string) {
    const addMovieObj = addMovie({ title });
    this.store.dispatch(addMovieObj);
  }

  searchMovies(searchTerm: string) {
    this.store.dispatch(searchMovies({ title: searchTerm }));
  }

  updateMovie(title: string, newTitle: string) {
    console.log(newTitle);
    const updateMovieObj = updateMovie({ title, newTitle });
    this.store.dispatch(updateMovieObj);
  }
}
