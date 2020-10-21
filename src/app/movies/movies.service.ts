import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { timeout } from "rxjs/operators";
import { Movie } from "./movie";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  data: Movie[] = [
    { title: "inception" },
    { title: "the godfather" },
    { title: "batman" },
    { title: "superman" },
    { title: "superman2" },
  ];
  constructor() {}

  //GET method
  fetchMovies() {
    return of(this.data).pipe(timeout(1000));
  }

  //POST method
  addMovie(title) {
    const movie: Movie = { title: title };
    this.data = [...this.data, movie];
    return of(this.data);
  }

  //UPDATE method
  updateMovie(title, newTitle) {
    const newData: Movie[] = [];
    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index].title === title) {
        const movie = { title: newTitle };
        newData.push(movie);
        continue;
      }
      const movie = { title: this.data[index].title };
      newData.push(movie);
    }
    this.data = newData;
    return of(newData);
  }

  //DELETE method
  deleteMovie(title) {
    const newData: Movie[] = [];
    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index].title === title) {
        continue;
      }
      const movie = { title: this.data[index].title };
      newData.push(movie);
    }
    this.data = newData;
    return of(newData);
  }

  searchMovies(searchTerm: string) {
    const filteredMovies = this.data.filter((movie) => {
      return movie.title.includes(searchTerm);
    });

    return of(filteredMovies);
  }
}
