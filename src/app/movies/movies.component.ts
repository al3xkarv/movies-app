import { Component, OnInit, Input } from '@angular/core';
import {Movie} from "../movie";
import {DbService} from "../services/db.service";
import { ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];


  constructor(private dbService: DbService,
    private route: ActivatedRoute) { }
  @Input() featured: boolean;

  getMovies(featured: string): void {

    if (featured == "true"){
    this.movies = this.dbService.getFeaturedMovies();
    }
    else {
      this.movies = this.dbService.getMovies();
    }
  }

  ngOnInit(): void {

    const featured = this.route.snapshot.params.featured;
    this.getMovies(featured);

  }

}
