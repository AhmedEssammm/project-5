import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getMovies(type:string):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=5cad67567f494396e62c2c1691400568`)
  }
  getMoviesDetails(id:string):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5cad67567f494396e62c2c1691400568&language=en-US`)
  }
  getTvDetails(id:string):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=5cad67567f494396e62c2c1691400568&language=en-US`)
  }
}
