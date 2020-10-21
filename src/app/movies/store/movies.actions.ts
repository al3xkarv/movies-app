import { createAction, props } from "@ngrx/store";
import { Movie } from "../movie";

export const fetchMovies = createAction("[Movies] fetch");
export const fetchMoviesSuccess = createAction(
  "[Movies] fetch success",
  props<{ movies: Movie[] }>()
);
export const fetchMoviesError = createAction("[Movies] fetch error");

export const deleteMovie = createAction(
  "[Movies] Delete",
  props<{ title: string }>()
);

export const addMovie = createAction(
  "[Movies] add",
  props<{ title: string }>()
);

export const updateMovie = createAction(
  "[Movies] update",
  props<{ title: string; newTitle: string }>()
);

export const searchMovies = createAction(
  "[Movies] search movies",
  props<{ title: string }>()
);
