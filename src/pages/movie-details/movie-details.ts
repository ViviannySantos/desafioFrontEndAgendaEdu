import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MovieProvider } from '../../providers/movie/movie';
import { Movie } from '../../models/movie/movie.model';

/**
 * Generated class for the MovieDetailsPage page.
 *
 */
@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetailsPage {

  movie: Movie;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public movieProvider: MovieProvider) {

    const selectedItem = navParams.get('movieId');
    this.movieProvider.getMovieDetails(selectedItem).subscribe(receitas => {
      this.movie = receitas;
    });

  }

}
