webpackJsonp([9],{

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDetailPageModule", function() { return CardDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_detail__ = __webpack_require__(497);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CardDetailPageModule = (function () {
    function CardDetailPageModule() {
    }
    CardDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__card_detail__["a" /* CardDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__card_detail__["a" /* CardDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__card_detail__["a" /* CardDetailPage */]
            ]
        })
    ], CardDetailPageModule);
    return CardDetailPageModule;
}());

//# sourceMappingURL=card-detail.module.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardDetailPage = (function () {
    function CardDetailPage(navCtrl, db, navParams, reviews, items, modalCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.reviews = reviews;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.item = navParams.get('item') || reviews.defaultReview;
        this.currentReviews = this.reviews.query();
    }
    CardDetailPage.prototype.ngOnInit = function () {
        console.log('/' + this.item.data + '/reviews');
        this.reviewsObservable = this.getReviews('/' + this.item.data + '/reviews');
    };
    CardDetailPage.prototype.getReviews = function (listPath) {
        return this.db.list(listPath).valueChanges();
    };
    CardDetailPage.prototype.getCard = function () {
        return this.item.data;
    };
    CardDetailPage.prototype.addReview = function () {
        this.navCtrl.push('ReviewCreatePage', {
            item1: this.item.data,
        });
    };
    CardDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'card-detail',template:/*ion-inline-start:"/Users/Jordan/a1stable/src/pages/card-detail/card-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ item.name }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addReview()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  \n\n</ion-header>\n\n\n<ion-content>\n  <img [src]="item.allergy_sheet">\n  \n\n  <div class="card-detail" padding>\n\n    <p><b>Nuts:</b> We do not have any peanuts or tree nuts in our pizzerias, and all of our homemade products are made without these ingredients. A few of our items, such as the vanilla ice cream and chocolate chip cookie dough, do not contain peanuts or tree nuts but are made in a facility where peanuts and tree nuts are present. </p>\n  </div>\n\n\n\n  <ion-list>\n    User reviews:\n    <ion-item *ngFor="let review of reviewsObservable | async">\n      \n        <ion-avatar item-start>\n          <img [src]="review.profile"/>\n          <h2>{{review.name}}</h2>\n        </ion-avatar>\n\n       \n\n        <div item-content>\n           <p style=""> {{review.details}} </p>\n          </div>\n        \n        \n          <div item-end>\n\n          </div>\n\n      \n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/Jordan/a1stable/src/pages/card-detail/card-detail.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_providers__["c" /* Reviews */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_providers__["c" /* Reviews */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_providers__["b" /* Items */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_providers__["b" /* Items */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _f || Object])
    ], CardDetailPage);
    return CardDetailPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=card-detail.js.map

/***/ })

});
//# sourceMappingURL=9.js.map