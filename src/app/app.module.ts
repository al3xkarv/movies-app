import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { AppRoutingModule } from './app-routing.module';
import { MoviesBComponent } from './movies/movies-b/movies-b.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { YourGuard } from './guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesBComponent,
    PageNotFoundComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [YourGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
