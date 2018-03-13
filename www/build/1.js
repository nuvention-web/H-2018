webpackJsonp([1],{

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewCreatePageModule", function() { return ReviewCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__review_create__ = __webpack_require__(501);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReviewCreatePageModule = (function () {
    function ReviewCreatePageModule() {
    }
    ReviewCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__review_create__["a" /* ReviewCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__review_create__["a" /* ReviewCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__review_create__["a" /* ReviewCreatePage */]
            ]
        })
    ], ReviewCreatePageModule);
    return ReviewCreatePageModule;
}());

//# sourceMappingURL=review-create.module.js.map

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

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__review_create_review_create_service__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__card_detail_card_detail__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_providers__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReviewCreatePage = (function () {
    function ReviewCreatePage(db, navParams, reviews, af, navCtrl, viewCtrl, reviewService, fb, formBuilder) {
        var _this = this;
        this.db = db;
        this.navParams = navParams;
        this.reviews = reviews;
        this.af = af;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.reviewService = reviewService;
        this.fb = fb;
        this.item = navParams.get('item') || reviews.defaultReview;
        this.reviewForm = formBuilder.group({
            // name: ['', Validators.required],
            details: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
        this.reviewForm.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.reviewForm.valid;
        });
    }
    ReviewCreatePage.prototype.onSubmit = function () {
        var details = this.reviewForm.value.details;
        var name = this.af.auth.currentUser.displayName;
        var profile = this.af.auth.currentUser.photoURL;
        var data = this.navParams.get('item1');
        var formRequest = { name: name, details: details, profile: profile };
        this.db.list('/' + data + '/reviews').push(formRequest);
    };
    /* this.reviewForm = formBuilder.group({
       name: ['', Validators.required],
       details: ['']
     });
 
     // Watch the form for changes, and
     this.reviewForm.valueChanges.subscribe((v) => {
       this.isReadyToSave = this.reviewForm.valid;
     });
   }
 addRev(){
   const {name, details} = this.reviewForm.value;
   let formRequest = { name, details};
   this.db.list('/reviws').push(formRequest).key;
 }
   newReview() {
     this.review = this.reviewService.createReview();
     this.buildForm();
   }
 
   private buildForm() {
     this.reviewForm = this.fb.group({
       name:    ['', Validators.required ],
       details:  ['', ],
     });
     this.review.subscribe(review => {
       this.reviewForm.patchValue(review)
     })
   }
 
   /**
    * The user cancelled, so we dismiss without sending data back.
    */
    ReviewCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the item, so return it
     * back to the presenter.
     */
    ReviewCreatePage.prototype.done = function () {
        if (!this.reviewForm.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.reviewForm.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('CardDetailPage'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__card_detail_card_detail__["a" /* CardDetailPage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__card_detail_card_detail__["a" /* CardDetailPage */]) === "function" && _a || Object)
    ], ReviewCreatePage.prototype, "data", void 0);
    ReviewCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'card-detail-create',template:/*ion-inline-start:"/Users/Jordan/a1stable/src/pages/review-create/review-create.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'ITEM_CREATE_TITLE\' | translate }}</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="cancel()">\n        <span color="primary" showWhen="ios">\n          {{ \'CANCEL_BUTTON\' | translate }}\n        </span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <form *ngIf="reviewForm" [formGroup]="reviewForm" (ngSubmit)="onSubmit()">\n    \n  \n    <ion-list>\n    <!--  <ion-item>\n        <ion-input type="text" placeholder="Enter Name" formControlName="name"></ion-input>\n      </ion-item>\n\n    -->\n      <ion-item>\n        <ion-textarea rows="15" type="text" placeholder="Enter Review" formControlName="details"></ion-textarea>\n      </ion-item>\n    </ion-list>\n\n    \n    <button ion-button type = "submit" (click)="done()" [disabled]="!isReadyToSave" strong>\n        <span color="primary" showWhen="ios">\n          {{ \'DONE_BUTTON\' | translate }}\n        </span>\n        <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n      </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/Jordan/a1stable/src/pages/review-create/review-create.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__review_create_review_create_service__["a" /* ReviewService */]]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__providers_providers__["c" /* Reviews */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_providers__["c" /* Reviews */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ViewController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__review_create_review_create_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__review_create_review_create_service__["a" /* ReviewService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _k || Object])
    ], ReviewCreatePage);
    return ReviewCreatePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=review-create.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewService = (function () {
    function ReviewService(db) {
        this.db = db;
    }
    ReviewService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ReviewService);
    return ReviewService;
}());

//# sourceMappingURL=review-create.service.js.map

/***/ })

});
//# sourceMappingURL=1.js.map