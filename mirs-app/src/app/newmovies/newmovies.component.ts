import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-newmovies',
  templateUrl: './newmovies.component.html',
  styleUrls: ['./newmovies.component.css']
})
export class NewmoviesComponent implements OnInit {
  arrMovies: string[];

  constructor(private router: Router,
    private httpService: HttpClient) { }

  ngOnInit() {
    this.getMovies();
  }
  getMovies(): void {

    var url1='https://api.themoviedb.org/3/movie/upcoming?api_key=841495e19b55aac8afc184ce51f28c6c&language=en-US'
    this.httpService.get(url1).subscribe(
      data => {
        this.arrMovies = data as string [];

       },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  
}
}
