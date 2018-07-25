import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CacheService } from "ionic-cache";

import { PopularMovieListPage } from '../pages/popular-movie-list/popular-movie-list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = PopularMovieListPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, cache: CacheService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      cache.setDefaultTTL(60 * 60 * 12);
      cache.setOfflineInvalidate(true);
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

