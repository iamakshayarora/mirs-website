import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { Movie }         from '../movie';
import { MovieService }  from '../movie.service';

@Component({
  selector: 'app-oldmoviepage',
  templateUrl: './oldmoviepage.component.html',
  styleUrls: ['./oldmoviepage.component.css']
})
export class OldmoviepageComponent implements OnInit {
  @Input() movie: Movie;
  arrMovies: string[];
  arrMovies2: string[];
  movieid: any;
  arrMovies1: string[];
  review(term: string): void {
  document.getElementById("inputreview").innerHTML=term;
  }

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private httpService: HttpClient 
  ) { }

  ngOnInit(): void {
    this.getDetails();
  }
  getDetails(): void {
    this.movieid=this.route.snapshot.url[1].path;
    var url1='http://api.themoviedb.org/3/movie/'+this.movieid+'?api_key=841495e19b55aac8afc184ce51f28c6c';
    this.httpService.get(url1).subscribe(
      data => {
        this.arrMovies = data as string []; 
        console.log(this.arrMovies); 
            document.getElementById('movietitle').innerHTML=this.arrMovies.title;
            document.getElementById('moviedesc').innerHTML=this.arrMovies.overview;
            document.getElementById('rating').innerHTML=this.arrMovies.vote_average;
            document.getElementById('moviereleasedate').innerHTML=this.arrMovies.release_date;
            document.getElementById('movieruntime').innerHTML=this.arrMovies.runtime+" Mins";
            document.getElementById('movierevenue').innerHTML=this.arrMovies.revenue+"$";
            var url2='http://api.themoviedb.org/3/movie/'+this.arrMovies.id+'/casts?api_key=841495e19b55aac8afc184ce51f28c6c'
            this.httpService.get(url2).subscribe(
              data2 => {
                this.arrMovies1 = data2 as string [];  
                for(var j=0;j<5;j++)
                {
                  document.getElementById('moviecast'+j).innerHTML=this.arrMovies1.cast[j].name+" as "+this.arrMovies1.cast[j].character;
                }
              });

            
            for(var j=0;j<3;j++)
            {
                document.getElementById('moviegenre'+j).innerHTML=this.arrMovies.genres[j].name+",";
             
            }
            var img = new Image();
            var div = document.getElementById('poster');
            
            
            img.onload = function() {
            
              div.innerHTML += '<img src="'+img.src+'"  width="15%"/>'; 
            
            };
            
            
            img.src = 'https://image.tmdb.org/t/p/w500'+this.arrMovies.poster_path;
            
    var url2='http://api.themoviedb.org/3/movie/'+this.arrMovies.id+'/reviews?api_key=841495e19b55aac8afc184ce51f28c6c';
    this.httpService.get(url2).subscribe(
      data => {
        this.arrMovies2 = data as string []; 
        for(var i=0;i<5;i++)
        {
        document.getElementById('moviereview'+i).innerHTML="<b>Author: </b>"+this.arrMovies2.results[i].author+"<br>"+this.arrMovies2.results[i].content+"<hr color=white>";
        }
  
  });


      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

  }
}
