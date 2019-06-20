import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../pipes'
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
 
  arrMovies: string [];

  search(term: string): void {
    if(term=="")
    {
      for(var i=0;i<5;i++){
        document.getElementById('a'+i).style.display="none";
        }
    }
    var url1='https://api.themoviedb.org/3/search/movie?api_key=841495e19b55aac8afc184ce51f28c6c&language=en-US&query='+term;
    this.httpService.get(url1).subscribe(
      data => {
        this.arrMovies = data as string [];	 // FILL THE ARRAY WITH DATA.
        if(this.arrMovies.results.length>=5)
        {
        for(var i=0;i<5;i++){
        document.getElementById('a'+i).style.display="block";
        document.getElementById('a'+i).innerHTML=this.arrMovies.results[i].title;
        }
        }
        else{
          for(var i=0;i<this.arrMovies.results.length;i++){
            document.getElementById('a'+i).style.display="block";
            document.getElementById('a'+i).innerHTML=this.arrMovies.results[i].title;
            }
        }
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    
  }

  constructor(private movieService: MovieService,
    private router: Router,
    private httpService: HttpClient) { }
  ngOnInit():void {
    
  

  }

clearresults() {
  for(var i=0;i<5;i++){
    document.getElementById('a'+i).style.display="none";
    }

  }
}