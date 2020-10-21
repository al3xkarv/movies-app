import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, Observable, of } from "rxjs";
import { map, mergeMap, catchError, switchMap } from "rxjs/operators";
import { MoviesService } from "../movies.service";
import {
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
  searchMovies,
  deleteMovie,
  addMovie,
  updateMovie,
} from "./movies.actions";

@Injectable()
export class MovieEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchMovies),
      switchMap(() =>
        this.moviesService.fetchMovies().pipe(
          map((movies) => fetchMoviesSuccess({ movies })),
          catchError(() => of(fetchMoviesError()))
        )
      )
    )
  );

  searchMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchMovies),
      switchMap(({ title }) =>
        this.moviesService
          .searchMovies(title)
          .pipe(map((movies) => fetchMoviesSuccess({ movies })))
      )
    )
  );

  addMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addMovie),
      switchMap(({ title }) =>
        this.moviesService.addMovie(title).pipe(
          map((movies) => fetchMoviesSuccess({ movies })),
          catchError(() => of(fetchMoviesError()))
        )
      )
    )
  );

  deleteMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteMovie),
      switchMap(({ title }) =>
        this.moviesService.deleteMovie(title).pipe(
          map((movies) => fetchMoviesSuccess({ movies })),
          catchError(() => of(fetchMoviesError()))
        )
      )
    )
  );

  updateMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateMovie),
      switchMap(({ title, newTitle }) =>
        this.moviesService.updateMovie(title, newTitle).pipe(
          map((movies) => fetchMoviesSuccess({ movies })),
          catchError(() => of(fetchMoviesError()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}
