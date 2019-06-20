import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {
  arrMovies: string[];
  arrMovies2: string[];
  arrMovies3: string[];
  arrMovies1: string[];
  constructor(private router: Router,
    private httpService: HttpClient) { }

  ngOnInit() {
    this.getMovies();
  }
  getMovies(): void {
    var url1='https://api.themoviedb.org/3/discover/movie?api_key=841495e19b55aac8afc184ce51f28c6c&sort_by=revenue.desc&original_language=en"'
    this.httpService.get(url1).subscribe(
      data => {
        this.arrMovies = data as string [];
        for(var i=0;i<20;i++)
        {
          document.getElementById("s"+(i+1)).innerHTML=(i+1)+". "+this.arrMovies.results[i].title;
          console.log(this.arrMovies.results[i].title);
          document.getElementById("r"+(i+1)).innerHTML="Rating- "+this.arrMovies.results[i].vote_average;
          // var url2='http://api.themoviedb.org/3/movie/'+this.arrMovies.results[i].id+'?api_key=841495e19b55aac8afc184ce51f28c6c'
          // this.httpService.get(url2).subscribe(
          //   data2 => {
          //     this.arrMovies1 = data2 as string [];
          //     document.getElementById("r"+(i+1)).innerHTML=this.arrMovies1.revenue+'$';
          //     });
          //   }

       }},
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

    var url3='https://api.themoviedb.org/3/discover/movie?api_key=841495e19b55aac8afc184ce51f28c6c&sort_by=revenue.desc&page=2'
    var j=0;
    this.httpService.get(url3).subscribe(
      data => {
        this.arrMovies2 = data as string [];
        for(var i=20;i<40;i++)
        {
          document.getElementById("s"+(i+1)).innerHTML=(i+1)+". "+this.arrMovies2.results[j].title;
          document.getElementById("r"+(i+1)).innerHTML="Rating- "+this.arrMovies2.results[j].vote_average;
          j++;
        }

       },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    var url5='https://api.themoviedb.org/3/discover/movie?api_key=841495e19b55aac8afc184ce51f28c6c&sort_by=revenue.desc&page=3'
    var k=0;
    this.httpService.get(url5).subscribe(
      data => {
        this.arrMovies3 = data as string [];
        for(var i=40;i<50;i++)
        {
          document.getElementById("s"+(i+1)).innerHTML=(i+1)+". "+this.arrMovies3.results[k].title;
          document.getElementById("r"+(i+1)).innerHTML="Rating- "+this.arrMovies3.results[k].vote_average;
          k++;
        }

       },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  

}}
