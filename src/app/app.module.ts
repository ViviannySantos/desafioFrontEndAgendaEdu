import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CacheModule } from 'ionic-cache';

import { MyApp } from './app.component';
import { PopularMovieListPage } from '../pages/popular-movie-list/popular-movie-list';
import { MovieProvider } from '../providers/movie/movie';

export const firebaseConfig = {
    apiKey: "AIzaSyCU9WR7PVL3xJBXje1zAXXi8a6Qed1kn5E",
    authDomain: "desafiofrontendagendaedu.firebaseapp.com",
    databaseURL: "https://desafiofrontendagendaedu.firebaseio.com",
    projectId: "desafiofrontendagendaedu",
    storageBucket: "desafiofrontendagendaedu.appspot.com",
    messagingSenderId: "869985167023"
};

@NgModule({
  declarations: [
    MyApp,
    PopularMovieListPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CacheModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PopularMovieListPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MovieProvider
  ]
})
export class AppModule { }
