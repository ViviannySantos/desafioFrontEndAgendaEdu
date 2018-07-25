import { Injectable } from '@angular/core';
import { CacheService } from 'ionic-cache';
import { Http, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
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

  private MOVIE_KEY = 'favorite-movies'

  private FIREBASE_PATH = '/favoriteMovies/';

  constructor(public http: Http, public fireDb: AngularFireDatabase, private cache: CacheService) { }

  private getURLSearchParams(): URLSearchParams {
    const params: URLSearchParams = new URLSearchParams();
    params.set('api_key', this.API_KEY);
    params.set('language', this.LANGUAGE);
    return params;
  }

  getMoviesByPage(page: string) {

    const ttl = 5;
    const params = this.getURLSearchParams();
    params.set('page', page);
    const reqOptions: RequestOptionsArgs = {
      params: params
    }

    const url = this.API_PATH + this.POPULAR_MOVIE_PATH + '?' + reqOptions.params;

    const request = this.http.get(url)
    const cacheDate = this.cache.loadFromObservable(url, request, this.MOVIE_KEY, ttl).
      map(response => response.json().results as Movie[]);

    if (request != null) {
      const req = request.map(response => response.json().results as Movie[]);
      return this.cache.loadFromObservable(url, req, this.MOVIE_KEY, ttl);
    } else {
      return cacheDate;
    }

  }

  searchMovie(nameMovie: string, page: string): Observable<Movie[]> {
    const params = this.getURLSearchParams();
    params.set('query', nameMovie);
    params.set('page', page);
    const reqOptions: RequestOptionsArgs = {
      params: params
    }
    return this.http.get(this.API_PATH + "search/movie", reqOptions)
      .map(response => response.json().results as Movie[]);
  }

  getMovieDetails(movieId: string): Observable<Movie> {
    const params = this.getURLSearchParams();
    const reqOptions: RequestOptionsArgs = {
      params: params
    }
    return this.http.get(this.API_PATH + `movie/${movieId}`, reqOptions)
      .map(response => response.json() as Movie);
  }

  addFavorite(movie: Movie) {
    return new Promise((resolve, reject) => {
      this.fireDb.list(this.FIREBASE_PATH)
        .push(movie)
        .then(() => resolve());
    })
  }

  getFavorites() {

    const relative = this.fireDb.list(this.FIREBASE_PATH).valueChanges();
    const cacheDate = this.cache.loadFromObservable(this.FIREBASE_PATH, relative, this.MOVIE_KEY).
      map(response => response.json().results as Movie[]);

    if (relative == null) {
      return cacheDate;
    } else {
      return relative;
    }
  }

}
