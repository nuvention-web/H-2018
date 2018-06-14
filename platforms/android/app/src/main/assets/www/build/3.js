webpackJsonp([3],{

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakePageModule", function() { return FakePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fake__ = __webpack_require__(508);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FakePageModule = (function () {
    function FakePageModule() {
    }
    FakePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fake__["a" /* FakePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fake__["a" /* FakePage */]),
            ],
        })
    ], FakePageModule);
    return FakePageModule;
}());

//# sourceMappingURL=fake.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabsPage = (function () {
    function TabsPage(navCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__pages__["c" /* Tab1Root */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__pages__["d" /* Tab2Root */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__pages__["e" /* Tab3Root */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__pages__["f" /* Tab4Root */];
        this.tab1Title = " ";
        this.tab2Title = " ";
        this.tab3Title = " ";
        this.tab4Title = " ";
        translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(function (values) {
            _this.tab1Title = values['TAB1_TITLE'];
            _this.tab2Title = values['TAB2_TITLE'];
            _this.tab3Title = values['TAB3_TITLE'];
            _this.tab4Title = "Favorites";
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */])
    ], TabsPage.prototype, "nav", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/Jordan/a1stable/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Restaurants" tabIcon="restaurant"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Explore" tabIcon="compass"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Favorites" tabIcon="star"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Settings" tabIcon="cog"></ion-tab>\n  \n</ion-tabs>\n'/*ion-inline-end:"/Users/Jordan/a1stable/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FakePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_allegens_allegens__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_cart_cart__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_tabs__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(21);
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
 * Generated class for the FakePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FakePage = (function () {
    function FakePage(fb, formBuilder, storage, callNumber, cart, allergies, http, navCtrl, db, navParams, reviews, items, modalCtrl) {
        var _this = this;
        this.fb = fb;
        this.storage = storage;
        this.callNumber = callNumber;
        this.cart = cart;
        this.allergies = allergies;
        this.http = http;
        this.navCtrl = navCtrl;
        this.db = db;
        this.navParams = navParams;
        this.reviews = reviews;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.item = navParams.get('item') || reviews.defaultReview;
        this.currentReviews = this.reviews.query();
        this.index1 = this.item.index;
        this.reviewForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["f" /* Validators */].required],
            details: ['', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["f" /* Validators */].required]
        });
        this.reviewForm.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.reviewForm.valid;
        });
    }
    FakePage.prototype.done = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__tabs_tabs__["a" /* TabsPage */]);
    };
    FakePage.prototype.ngOnInit = function () {
        this.show = [false, false, false, false, false, false];
        this.menuTypes = this.getReviews('/' + this.item.data);
        /*  this.db.database.ref("/lous").on("value", function(snapshot) {
            console.log(snapshot.val());
          });
      
      */
    };
    FakePage.prototype.call = function () {
        this.var = this.item.number;
        this.callNumber.callNumber(this.var, true);
    };
    FakePage.prototype.getReviews = function (listPath) {
        return this.db.list(listPath).valueChanges();
    };
    FakePage.prototype.getCard = function () {
        return this.item.data;
    };
    FakePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fake',template:/*ion-inline-start:"/Users/Jordan/a1stable/src/pages/fake/fake.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img src="../assets/img/logo-new.png" width="40px" style="display:inline-block" height="40px"/>\n          </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n\n  <ion-content class="card-detail-page">\n\n    <div class="header-pic">\n\n\n\n\n        <img [src]="item.profilePic" id="card-pic">\n\n        <div class="heading-new">\n            {{item.name}}\n        </div>\n\n        <div class="subheading">\n            {{item.address}} \n        </div>\n\n\n        <button ion-button id="but">\n            <ion-icon name=\'call\'></ion-icon>\n            <a id="link" [href]="item.number">Call Restaurant</a>\n            </button>\n\n\n            <button ion-button id="yelp">\n                <ion-icon name=\'logo-hackernews\'></ion-icon>\n                <a id="link" [href]="item.yelp">Yelp Page</a>\n                </button>\n\n</div>\n\n<div class="restaurantdisc1">\n  Want to see an allergen-filtered menu?\n\n  Let the restaurant know that they should submit their information to Pallergy.\n\n</div>\n\n<form [formGroup]="reviewForm" >\n    \n  \n    <ion-list>\n     <ion-item>\n        <ion-input type="text" placeholder="Enter Name" formControlName="name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-input type="text" placeholder="Enter Email" formControlName="email"></ion-input>\n        </ion-item>\n\n    \n      <ion-item>\n        <ion-textarea rows="2" type="text" placeholder="Enter Allergens" formControlName="details"></ion-textarea>\n      </ion-item>\n    </ion-list>\n\n    \n    <button ion-button (click)="done()" [disabled]="!isReadyToSave" block color="secondary">\n        Submit\n      </button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Jordan/a1stable/src/pages/fake/fake.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_6__providers_cart_cart__["a" /* Cart */], __WEBPACK_IMPORTED_MODULE_5__providers_allegens_allegens__["a" /* AllegensProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["d" /* Reviews */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["c" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], FakePage);
    return FakePage;
}());

//# sourceMappingURL=fake.js.map

/***/ })

});
//# sourceMappingURL=3.js.map