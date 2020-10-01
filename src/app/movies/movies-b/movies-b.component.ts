import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-b',
  templateUrl: './movies-b.component.html',
  styleUrls: ['./movies-b.component.css']
})
export class MoviesBComponent implements OnInit {

  title = "B testing component";
  constructor() { }

  ngOnInit(): void {
  }

}
