webpackJsonp([0],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsPageModule", function() { return MovieDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movie_details__ = __webpack_require__(737);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MovieDetailsPageModule = /** @class */ (function () {
    function MovieDetailsPageModule() {
    }
    MovieDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__movie_details__["a" /* MovieDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__movie_details__["a" /* MovieDetailsPage */]),
            ],
        })
    ], MovieDetailsPageModule);
    return MovieDetailsPageModule;
}());

//# sourceMappingURL=movie-details.module.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_movie_movie__ = __webpack_require__(170);
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
 * Generated class for the MovieDetailsPage page.
 *
 */
var MovieDetailsPage = /** @class */ (function () {
    function MovieDetailsPage(navCtrl, navParams, movieProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.movieProvider = movieProvider;
        var selectedItem = navParams.get('movieId');
        this.movieProvider.getMovieDetails(selectedItem).subscribe(function (receitas) {
            _this.movie = receitas;
        });
    }
    MovieDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-movie-details',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/desafioFrontEndAgendaEdu/src/pages/movie-details/movie-details.html"*/'<!--\n  Generated template for the MovieDetailsPage page.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="movie">\n      <b class="line-break">{{movie.belongs_to_collection.name}}</b>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding *ngIf="movie">\n\n  <ion-card class="card-synopsis">\n    <ion-card-content>\n      <h1>Sinopse</h1>\n      <h2>{{movie.overview}}</h2>\n    </ion-card-content>\n  </ion-card>\n\n  <div class="container-box">\n\n    <aside>\n      <ion-card>\n        <img src="{{\'https://image.tmdb.org/t/p/w500\'+movie.backdrop_path}}" />\n      </ion-card>\n    </aside>\n\n    <main class="box" *ngFor="let genre of movie.genres">\n      <h4 class="text-color text-margin">{{movie.original_title}} ({{movie.release_date | date: \'dd/MM/yyyy\' }}) </h4>\n      <h5 class="text-color text-margin"> Nota: {{movie.vote_average}} </h5>\n      <h5 class="text-color text-margin"> Duração: {{movie.runtime}} </h5>\n      <h5 class="text-color text-margin"> Adulto: {{ movie.adult ?\'Sim\':\'Não\' }}</h5>\n      <h5 class="text-color text-margin"> Gênero: {{ genre.name }}</h5>\n      <h5 class="text-color text-margin"> Linguagem Original: {{ movie.original_language }} </h5>\n      <ion-badge class="badge-info" *ngFor="let genre of movie.genres" item-start>{{genre.name}}</ion-badge>\n    </main>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/GitHub/desafioFrontEndAgendaEdu/src/pages/movie-details/movie-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_movie_movie__["a" /* MovieProvider */]])
    ], MovieDetailsPage);
    return MovieDetailsPage;
}());

//# sourceMappingURL=movie-details.js.map

/***/ })

});
//# sourceMappingURL=0.js.map