import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MOVIES';
  name = new FormControl('');
  latestRefresh: Date = new Date();

 constructor (){

   setInterval(() => {
      this.latestRefresh = new Date();
    }, 1);

 }
}
