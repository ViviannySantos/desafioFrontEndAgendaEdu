import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Movie } from '../../models/movie/movie.model';

/*
  Generated class for the MovieProvider provider.
*/
@Injectable()
export class MovieProvider {

  private API_PATH = 'https://api.themoviedb.org/3/'
  private POPULAR_MOVIE_PATH = 'movie/popular';
  private API_KEY = '11dde4250de8e0b31aa9f81de4cce04a';
  private LANGUAGE = 'pt-BR';

  constructor(public http: Http) { }

  private getURLSearchParams(): URLSearchParams {
    const params: URLSearchParams = new URLSearchParams();
    params.set('api_key', this.API_KEY);
    params.set('language', this.LANGUAGE);
    return params;
  }

  getMoviesByPage(page: string) {
    const params = this.getURLSearchParams();
    params.set('page', page);
    const reqOptions: RequestOptionsArgs = {
      params: params
    }
    return this.http.get(this.API_PATH + this.POPULAR_MOVIE_PATH, reqOptions)
      .map(response => response.json().results as Movie[]);
  }

  searchMovieByNameAndPage(nameMovie: string, page: string): Observable<Movie[]> {
    const params = this.getURLSearchParams();
    params.set("query", nameMovie);
    params.set("page", page);
    const reqOptions: RequestOptionsArgs = {
      params: params
    }
    return this.http.get(this.API_PATH + "search/movie", reqOptions)
      .map(response => response.json().results as Movie[]);
  }
}
