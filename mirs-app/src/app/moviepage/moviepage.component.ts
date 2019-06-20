import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { Movie }         from '../movie';
import { MovieService }  from '../movie.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-moviepage',
  templateUrl: './moviepage.component.html',
  styleUrls: ['./moviepage.component.css']
})
export class MoviepageComponent implements OnInit {
  @Input() movie: Movie;
  arrMovies: string[];
  arrMovies1: string[];
  movieid: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private httpService: HttpClient  ) { }

  ngOnInit(): void {
    this.getDetails();
  }
  getDetails(): void {
    var url1='https://api.themoviedb.org/3/movie/upcoming?api_key=841495e19b55aac8afc184ce51f28c6c&language=en-US'
    this.httpService.get(url1).subscribe(
      data => {
        this.arrMovies = data as string [];  
        this.movieid=this.route.snapshot.url[1].path;
        this.movieid=parseFloat(this.movieid);
        console.log(this.movieid);
        for(var i=0;i<this.arrMovies.results.length;i++)
        {
          var x=this.arrMovies.results[i].id;         
          x=parseFloat(x);
          console.log(x);
          if(this.movieid==x){
            console.log("Matched");
            document.getElementById('movietitle').innerHTML=this.arrMovies.results[i].title;
            document.getElementById('moviedesc').innerHTML=this.arrMovies.results[i].overview;
            document.getElementById('rating').innerHTML=this.arrMovies.results[i].vote_average;
            document.getElementById('moviereleasedate').innerHTML=this.arrMovies.results[i].release_date;

            var url2='http://api.themoviedb.org/3/movie/'+this.arrMovies.results[i].id+'/casts?api_key=841495e19b55aac8afc184ce51f28c6c'
            this.httpService.get(url2).subscribe(
              data2 => {
                this.arrMovies1 = data2 as string [];  
                for(var j=0;j<5;j++)
                {
                  document.getElementById('moviecast'+j).innerHTML=this.arrMovies1.cast[j].name+" as "+this.arrMovies1.cast[j].character;
                }
              });

            
            for(var j=0;j<this.arrMovies.results[i].genre_ids.length;j++)
            {
              var genreid=this.arrMovies.results[i].genre_ids[j];
              if(genreid==28){
                document.getElementById('moviegenre'+j).innerHTML="Action,";
              }
              else if(genreid==18){
                document.getElementById('moviegenre'+j).innerHTML="Drama,";
              }
              else if(genreid==16){
                document.getElementById('moviegenre'+j).innerHTML="Animated,";
              }
              else if(genreid==99){
                document.getElementById('moviegenre'+j).innerHTML="Documentary,";
              }
              else if(genreid==10751){
                document.getElementById('moviegenre'+j).innerHTML="Family,";
              }              
              else if(genreid==14){
                document.getElementById('moviegenre'+j).innerHTML="Fantasy,";
              }
              else if(genreid==36){
                document.getElementById('moviegenre'+j).innerHTML="History,";
              }
              else if(genreid==35){
                document.getElementById('moviegenre'+j).innerHTML="Comedy,";
              }
              else if(genreid==10752){
                document.getElementById('moviegenre'+j).innerHTML="War,";
              }
              else if(genreid==80){
                document.getElementById('moviegenre'+j).innerHTML="Crime,";
              }
              else if(genreid==10402){
                document.getElementById('moviegenre'+j).innerHTML="Music,";
              }
              else if(genreid==9648){
                document.getElementById('moviegenre'+j).innerHTML="Mystery,";
              }
              else if(genreid==10749){
                document.getElementById('moviegenre'+j).innerHTML="Romance,";
              }
              else if(genreid==878){
                document.getElementById('moviegenre'+j).innerHTML="Sci-Fi,";
              }
              else if(genreid==27){
                document.getElementById('moviegenre'+j).innerHTML="Horror,";
              }
              else if(genreid==10770){
                document.getElementById('moviegenre'+j).innerHTML="TV Movie,";
              }
              else if(genreid==53){
                document.getElementById('moviegenre'+j).innerHTML="Thriller,";
              }
              else if(genreid==37){
                document.getElementById('moviegenre'+j).innerHTML="Western,";
              }
              else if(genreid==12){
                document.getElementById('moviegenre'+j).innerHTML="Adventure,";
              }
              
            }
            var img = new Image();
            var div = document.getElementById('poster');
            
            
            img.onload = function() {
            
              div.innerHTML += '<img src="'+img.src+'"  width="15%"/>'; 
            
            };
            
            
            img.src = 'https://image.tmdb.org/t/p/w500'+this.arrMovies.results[i].poster_path;





            break;
          }
          else{
            console.log("Not Matched!")
          } 
        } 
        
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

  }



}
