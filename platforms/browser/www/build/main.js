webpackJsonp([3],{

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_cache__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the MovieProvider provider.
*/
var MovieProvider = /** @class */ (function () {
    function MovieProvider(http, fireDb, cache) {
        this.http = http;
        this.fireDb = fireDb;
        this.cache = cache;
        this.API_PATH = 'https://api.themoviedb.org/3/';
        this.POPULAR_MOVIE_PATH = 'movie/popular';
        this.API_KEY = '11dde4250de8e0b31aa9f81de4cce04a';
        this.LANGUAGE = 'pt-BR';
        this.MOVIE_KEY = 'favorite-movies';
        this.FIREBASE_PATH = '/favoriteMovies/';
    }
    MovieProvider.prototype.getURLSearchParams = function () {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        params.set('api_key', this.API_KEY);
        params.set('language', this.LANGUAGE);
        return params;
    };
    MovieProvider.prototype.getMoviesByPage = function (page) {
        var ttl = 5;
        var params = this.getURLSearchParams();
        params.set('page', page);
        var reqOptions = {
            params: params
        };
        // return this.http.get(this.API_PATH + this.POPULAR_MOVIE_PATH, reqOptions)
        //   .map(response => response.json().results as Movie[]);
        var url = this.API_PATH + this.POPULAR_MOVIE_PATH + '?' + reqOptions.params;
        var request = this.http.get(this.API_PATH + this.POPULAR_MOVIE_PATH, reqOptions);
        var cache = this.cache.loadFromObservable(url, request, this.MOVIE_KEY, ttl).
            map(function (response) { return response.json().results; });
        if (request != null) {
            var req = request.map(function (response) { return response.json().results; });
            return this.cache.loadFromObservable(url, req, this.MOVIE_KEY, ttl);
        }
        else {
            return cache;
        }
    };
    MovieProvider.prototype.searchMovie = function (nameMovie, page) {
        var params = this.getURLSearchParams();
        params.set('query', nameMovie);
        params.set('page', page);
        var reqOptions = {
            params: params
        };
        return this.http.get(this.API_PATH + "search/movie", reqOptions)
            .map(function (response) { return response.json().results; });
    };
    MovieProvider.prototype.getMovieDetails = function (movieId) {
        var params = this.getURLSearchParams();
        var reqOptions = {
            params: params
        };
        return this.http.get(this.API_PATH + ("movie/" + movieId), reqOptions)
            .map(function (response) { return response.json(); });
    };
    MovieProvider.prototype.addFavorite = function (movie) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.fireDb.list(_this.FIREBASE_PATH)
                .push(movie)
                .then(function () { return resolve(); });
        });
    };
    MovieProvider.prototype.getFavorites = function () {
        var relative = this.fireDb.list(this.FIREBASE_PATH).valueChanges();
        return relative;
    };
    MovieProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_cache__["b" /* CacheService */]])
    ], MovieProvider);
    return MovieProvider;
}());

//# sourceMappingURL=movie.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopularMovieListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_cache__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_movie_movie__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the PopularMovieListPage page.
 *
 */
var PopularMovieListPage = /** @class */ (function () {
    function PopularMovieListPage(navCtrl, navParams, toast, movieProvider, toastCtrl, cacheService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.movieProvider = movieProvider;
        this.toastCtrl = toastCtrl;
        this.cacheService = cacheService;
        this.movies = [];
        this.page = 0;
        this.endPages = false;
        this.movieSearch$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Subject"]();
        if (this.allFilterOption || this.allFilterOption == null) {
            this.getMovies();
        }
        else {
            this.favoritesMovies();
        }
    }
    PopularMovieListPage.prototype.clean = function () {
        this.page = 0;
        this.movies = [];
        this.endPages = false;
        this.content.scrollToTop(200);
    };
    PopularMovieListPage.prototype.getMovies = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'Não foi possível realizar a operação devido a limitação da API. Por favor tente mais tarde.',
            position: 'top', duration: 5000, showCloseButton: true
        });
        this.movieSearch$
            .debounceTime(500)
            .switchMap(function (search) {
            _this.lastSearch = search;
            _this.page++;
            if (search == null || search == '') {
                return _this.movieProvider.getMoviesByPage(_this.page.toString());
            }
            else {
                return _this.movieProvider.searchMovie(search, _this.page.toString());
            }
        })
            .catch(function (error) { return toast.present(); })
            .subscribe(function (movies) {
            _this.movies = _this.movies.concat(movies);
            if (movies.length === 0) {
                _this.endPages = true;
            }
        });
        this.allFilterOption = true;
        setTimeout(function () { return _this.movieSearch$.next(""); }, 400);
    };
    PopularMovieListPage.prototype.searchMovie = function (ev) {
        var searchNameMovie = ev.target.value;
        this.clean();
        this.movieSearch$.next(searchNameMovie);
    };
    PopularMovieListPage.prototype.getMovieDetails = function (movieId) {
        this.navCtrl.push('MovieDetailsPage', { movieId: movieId });
    };
    PopularMovieListPage.prototype.addFavorite = function (movie) {
        var _this = this;
        this.movieProvider.addFavorite(movie)
            .then(function () {
            _this.toast.create({ message: 'Filme adicionado a lista de favoritos.', duration: 3000, position: 'top' }).present();
        });
    };
    PopularMovieListPage.prototype.favoritesMovies = function () {
        var _this = this;
        this.clean();
        this.allFilterOption = false;
        return this.movieProvider.getFavorites()
            .subscribe(function (movies) {
            _this.movies = _this.movies.concat(movies);
        });
    };
    PopularMovieListPage.prototype.allMovies = function () {
        this.clean();
        this.getMovies();
    };
    PopularMovieListPage.prototype.ngOnDestroy = function () {
        if (this.movieSearch$) {
            this.movieSearch$.unsubscribe();
        }
    };
    PopularMovieListPage.prototype.doInfinite = function (infiniteScroll) {
        this.movieSearch$.next(this.lastSearch);
        setTimeout(function () {
            infiniteScroll.complete();
        }, 500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], PopularMovieListPage.prototype, "content", void 0);
    PopularMovieListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popular-movie-list',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/desafioFrontEndAgendaEdu/src/pages/popular-movie-list/popular-movie-list.html"*/'<!--\n  Generated template for the PopularMovieListPage page.\n  Lista dos filmes mais populares no momento \n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title class="text-center clear">Filmes Populares</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="card-background-page">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-10 col-md-5 col-lg-3>\n        <ion-buttons end class="fixbar">\n          <ion-searchbar (ionInput)=\'searchMovie($event)\' autocorrect="on"></ion-searchbar>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-8 col-md-3 col-lg-2>\n        <ion-list>\n          <ion-item>\n            <ion-label>Filtro</ion-label>\n            <ion-select interface="popover">\n              <ion-option (ionSelect)="allMovies()"> Todos </ion-option>\n              <ion-option (ionSelect)="favoritesMovies()"> Favoritos </ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="grid-movies">\n    <ion-row>\n      <ion-col col-6 col-md-3 col-lg-2 *ngFor="let movie of movies">\n        <ion-card class=\'card\' *ngIf="movie">\n\n          <img (click)=\'getMovieDetails(movie.id)\' src="{{\'https://image.tmdb.org/t/p/w185_and_h278_bestv2\'+movie.poster_path}}" />\n\n          <ion-card-content ion-card clear>\n            <p>\n              <ion-icon name=\'md-calendar\'></ion-icon>\n              {{movie.release_date | date: \'dd/MM/yyyy\'}}\n            </p>\n          </ion-card-content>\n\n          <ion-row no-padding class="information">\n            <ion-col col-7 col-md-6 col-lg-6>\n              <button ion-button clear small color="danger" (click)=\'addFavorite(movie)\' icon-start>\n                <ion-icon name=\'star\'></ion-icon>\n                Favorite\n              </button>\n            </ion-col>\n          </ion-row>\n\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/GitHub/desafioFrontEndAgendaEdu/src/pages/popular-movie-list/popular-movie-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_movie_movie__["a" /* MovieProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_cache__["b" /* CacheService */]])
    ], PopularMovieListPage);
    return PopularMovieListPage;
}());

//# sourceMappingURL=popular-movie-list.js.map

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 204;

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/movie-details/movie-details.module": [
		734,
		0
	],
	"../pages/popular-movie-list/popular-movie-list.module": [
		736,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 248;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(425);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_cache__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_popular_movie_list_popular_movie_list__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_movie_movie__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var firebaseConfig = {
    apiKey: "AIzaSyCU9WR7PVL3xJBXje1zAXXi8a6Qed1kn5E",
    authDomain: "desafiofrontendagendaedu.firebaseapp.com",
    databaseURL: "https://desafiofrontendagendaedu.firebaseio.com",
    projectId: "desafiofrontendagendaedu",
    storageBucket: "desafiofrontendagendaedu.appspot.com",
    messagingSenderId: "869985167023"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_popular_movie_list_popular_movie_list__["a" /* PopularMovieListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/movie-details/movie-details.module#MovieDetailsPageModule', name: 'MovieDetailsPage', segment: 'movie-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popular-movie-list/popular-movie-list.module#PopularMovieListPageModule', name: 'PopularMovieListPage', segment: 'popular-movie-list', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8_ionic_cache__["a" /* CacheModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_popular_movie_list_popular_movie_list__["a" /* PopularMovieListPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_movie_movie__["a" /* MovieProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_cache__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_popular_movie_list_popular_movie_list__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, cache) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_popular_movie_list_popular_movie_list__["a" /* PopularMovieListPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            cache.setDefaultTTL(60 * 60 * 12);
            cache.setOfflineInvalidate(true);
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/GitHub/desafioFrontEndAgendaEdu/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/admin/Documents/GitHub/desafioFrontEndAgendaEdu/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4_ionic_cache__["b" /* CacheService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[317]);
//# sourceMappingURL=main.js.map