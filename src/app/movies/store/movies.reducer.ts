import { createReducer, on } from "@ngrx/store";
import { Movie } from "../movie";
import {
  deleteMovie,
  fetchMoviesSuccess,
  addMovie,
  updateMovie,
} from "./movies.actions";

export interface State {
  items: Movie[];
  x: number;
}

const initState: State = {
  items: [],
  x: 1,
};

export const moviesReducer = createReducer(
  initState,
  on(fetchMoviesSuccess, (state, { movies }) => {
    // The items property was missing below that's why we were getting an error
    return {
      ...state,
      items: movies,
    };
  }),

  on(deleteMovie, (state, { title }) => {
    return {
      ...state,
      items: state.items.map((item) => {
        if (item.title === title) {
          return {
            ...item,
            deleted: true,
          };
        }

        return item;
      }),
    };
  })

  // ,on(addMovie, (state, { title }) => {
  //   return {
  //     ...state,
  //     items: state.items.map((item) => {
  //       if (item.title === title) {
  //         return {
  //           ...item,
  //           // deleted: true,
  //         };
  //       }

  //       return item;
  //     }),
  //   };
  // })
);
