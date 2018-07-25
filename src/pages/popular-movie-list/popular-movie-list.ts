import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ToastController } from 'ionic-angular';
import { CacheService } from 'ionic-cache';
import { Subject } from 'rxjs/Rx';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

import { MovieProvider } from '../../providers/movie/movie';
import { Movie } from '../../models/movie/movie.model';

/**
 * Generated class for the PopularMovieListPage page.
 *
 */
@IonicPage()
@Component({
  selector: 'page-popular-movie-list',
  templateUrl: 'popular-movie-list.html',
})
export class PopularMovieListPage {

  movies: Movie[] = [];

  private page: number = 0;
  endPages: boolean = false;

  movieSearch$: Subject<string> = new Subject<string>();
  private lastSearch: string;

  private allFilterOption: boolean;

  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,
    public movieProvider: MovieProvider, public toastCtrl: ToastController, public cacheService: CacheService) {
    this.getMovies();
  }

  ionViewDidLoad() {
    this.getMovies();
  }

  private clean() {
    this.page = 0;
    this.movies = [];
    this.endPages = false;
    this.content.scrollToTop(200);
  }

  getMovies() {

    let toast = this.toastCtrl.create({
      message: 'Não foi possível realizar a operação devido a limitação da API. Por favor tente mais tarde.',
      position: 'top', duration: 5000, showCloseButton: true
    });
    this.allFilterOption = true;
    this.movieSearch$
      .debounceTime(500)
      .switchMap((search: string) => {
        this.lastSearch = search;
        this.page++;
        if (search == null || search == '') {
          return this.movieProvider.getMoviesByPage(this.page.toString());
        } else {
          return this.movieProvider.searchMovie(search, this.page.toString());
        }
      })
      .catch(error => toast.present())
      .subscribe((movies: Movie[]) => {
        this.movies = this.movies.concat(movies);
        if (movies.length === 0) {
          this.endPages = true;
        }
      });

    this.allFilterOption = true;
    setTimeout(() => this.movieSearch$.next(""), 500);
  }

  searchMovie(ev: any) {
    const searchNameMovie = ev.target.value;
    this.clean();
    this.movieSearch$.next(searchNameMovie);
  }

  getMovieDetails(movieId: number) {
    this.navCtrl.push('MovieDetailsPage', { movieId: movieId });
  }

  addFavorite(movie: Movie) {
    this.movieProvider.addFavorite(movie)
      .then(() => {
        this.toast.create({ message: 'Filme adicionado a lista de favoritos.', duration: 3000, position: 'top' }).present();
      })
  }

  favoritesMovies() {
    this.clean();
    this.allFilterOption = false;
    return this.movieProvider.getFavorites()
      .subscribe((movies: Movie[]) => {
        this.movies = this.movies.concat(movies);
      });
  }

  allMovies() {
    this.clean();
    this.getMovies();
  }

  ngOnDestroy(): void {
    if (this.movieSearch$) {
      this.movieSearch$.unsubscribe();
    }
  }

  doInfinite(infiniteScroll) {
    if (this.allFilterOption || this.allFilterOption == null) {
      this.movieSearch$.next(this.lastSearch);
      setTimeout(() => {
        infiniteScroll.complete();
      }, 500);
    } else {
      infiniteScroll.complete();
    }
  }

}
