import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  movies: Movie[];
  arrMovies: string[];
  constructor(private MovieService: MovieService,
    private router: Router,
    private httpService: HttpClient
    ) { }

  ngOnInit() {

    this.getMovies();
    $(document).ready(function(){
      $.getJSON("https://api.themoviedb.org/3/movie/upcoming?api_key=841495e19b55aac8afc184ce51f28c6c&language=en-US", function(json){
      for(var i=0;i<5;i++)
      {
        $('#m'+[i+1]).attr('src',"https://image.tmdb.org/t/p/w500"+json.results[i].backdrop_path);
        $("#t"+[i+1]).text(json.results[i].title);
      }
       }); 
      });
      
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
