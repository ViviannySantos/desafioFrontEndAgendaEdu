import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopularMovieListPage } from './popular-movie-list';

@NgModule({
  declarations: [
    PopularMovieListPage,
  ],
  imports: [
    IonicPageModule.forChild(PopularMovieListPage),
  ],
})
export class PopularMovieListPageModule {}
