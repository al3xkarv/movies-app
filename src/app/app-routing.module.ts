import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterModule, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MoviesBComponent } from './movies/movies-b/movies-b.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {YourGuard} from "./guard";
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent, pathMatch: 'prefix'},
  { path: 'featuredmovies', component: MoviesComponent, pathMatch: 'prefix' },
  { path: 'moviesb', component: MoviesBComponent, pathMatch: 'prefix' },
  { path: 'movieswithid', component: MoviesComponent, pathMatch: 'prefix', canActivate:[YourGuard]},
  {path: 'reactive', component: ReactiveFormComponent},
  { path: '', component: MoviesComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
