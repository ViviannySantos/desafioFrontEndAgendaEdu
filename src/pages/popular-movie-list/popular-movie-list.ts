import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ToastController } from 'ionic-angular';
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

  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public movieProvider: MovieProvider, public toastCtrl: ToastController) {
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
      position: 'top',
      duration: 5000,
      cssClass: 'danger',
      showCloseButton: true
    });

    this.movieSearch$
      .debounceTime(500)
      .switchMap((search: string) => {
        this.lastSearch = search;
        this.page++;
        if (search == null || search == '') {
          return this.movieProvider.getMoviesByPage(this.page.toString());
        } else {
          return this.movieProvider.searchMovieByNameAndPage(search, this.page.toString());
        }
      })
      .catch(error => toast.present())
      .subscribe((movies: Movie[]) => {
        this.movies = this.movies.concat(movies);
        if (movies.length === 0) {
          this.endPages = true;
        }
      });

    setTimeout(() => this.movieSearch$.next(""), 500);
  }

  searchMovieByNameAndPage(ev: any) {
    const searchMameMovie = ev.target.value;
    this.clean();
    this.movieSearch$.next(searchMameMovie);
  }

  ngOnDestroy(): void {
    if (this.movieSearch$) {
      this.movieSearch$.unsubscribe();
    }
  }

  doInfinite(infiniteScroll) {
    this.movieSearch$.next(this.lastSearch);
    setTimeout(() => {
      infiniteScroll.complete();
    }, 500);
  }

}
