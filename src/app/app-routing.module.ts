import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MoviesBComponent } from './movies/movies-b/movies-b.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent, pathMatch: 'prefix' },
  { path: 'featuredmovies', component: MoviesComponent, pathMatch: 'prefix' },
  { path: 'moviesb', component: MoviesBComponent, pathMatch: 'prefix' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
