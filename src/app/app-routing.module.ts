import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourGuard } from './guard';
import { MoviesBComponent } from './movies/movies-b/movies-b.component';
import { MoviesComponent } from './movies/movies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent, pathMatch: 'prefix' },
  { path: 'featuredmovies', component: MoviesComponent, pathMatch: 'prefix' },
  { path: 'moviesb', component: MoviesBComponent, pathMatch: 'prefix' },
  {
    path: 'movieswithid',
    component: MoviesComponent,
    pathMatch: 'prefix',
    canActivate: [YourGuard],
  },
  { path: '', component: MoviesComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
