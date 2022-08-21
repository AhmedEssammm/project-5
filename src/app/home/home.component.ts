import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendingMovies:any[]=[];
  trendingTv:any[]=[];
  trendingPeople:any[]=[];
  imgPrefix:string='https://image.tmdb.org/t/p/w500'

  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.getMovies('movie').subscribe((res)=>{
      this.trendingMovies=res.results.splice(0,10);
    })
    this._MoviesService.getMovies('tv').subscribe((res)=>{
      this.trendingTv=res.results.splice(0,10);
    })
    this._MoviesService.getMovies('people').subscribe((res)=>{
      this.trendingPeople=res.results.splice(0,10);
    })
  }

}
