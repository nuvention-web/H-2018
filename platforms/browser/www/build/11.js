webpackJsonp([11],{

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDetailPageModule", function() { return CardDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_detail__ = __webpack_require__(506);
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

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_allegens_allegens__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_cart_cart__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(315);
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
    function CardDetailPage(storage, callNumber, cart, allergies, http, navCtrl, db, navParams, reviews, items, modalCtrl) {
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
    }
    CardDetailPage.prototype.ngOnInit = function () {
        this.show = [false, false, false, false, false, false];
        this.menuTypes = this.getReviews('/' + this.item.data);
        /*  this.db.database.ref("/lous").on("value", function(snapshot) {
            console.log(snapshot.val());
          });
      
      */
    };
    CardDetailPage.prototype.call = function () {
        this.var = this.item.number;
        this.callNumber.callNumber(this.var, true);
    };
    CardDetailPage.prototype.shower = function (i) {
        this.show[i] = !this.show[i];
    };
    CardDetailPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
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
    CardDetailPage.prototype.addToCart = function (item, i, j) {
        var fav = this.item.name + " - " + item;
        var index = this.cart.cart.indexOf(fav);
        //item.checked=false;
        if (index == -1) {
            this.cart.cart.push(fav);
            this.cart.fav[this.index1][i][j] = !this.cart.fav[this.index1][i][j];
        }
        else {
            this.cart.cart.splice(index, 1);
            this.cart.fav[this.index1][i][j] = !this.cart.fav[this.index1][i][j];
        }
    };
    CardDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'card-detail',template:/*ion-inline-start:"/Users/Jordan/a1stable/src/pages/card-detail/card-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img src="../assets/img/logo-new.png" width="40px" style="display:inline-block" height="40px"/>\n          </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n\n  <ion-content class="card-detail-page">\n\n    <div class="header-pic">\n\n\n\n\n        <img [src]="item.profilePic" id="card-pic">\n\n        <div class="heading-new">\n            {{item.name}}\n        </div>\n\n        <div class="subheading">\n            {{item.address}} \n        </div>\n\n\n        <button ion-button id="but">\n            <ion-icon name=\'call\'></ion-icon>\n            <a id="link" [href]="item.number">Call Restaurant</a>\n            </button>\n\n\n            <button ion-button id="yelp">\n                <ion-icon name=\'logo-hackernews\'></ion-icon>\n                <a id="link" [href]="item.yelp">Yelp Page</a>\n                </button>\n\n\n            \n\n            <div class="round-star-label"></div>\n            <div class="percentage">\n              {{item.percent}} %\n             \n             \n            </div>\n\n            <div class="allergen-free">\n                allergen \n                <br>\n                free\n              </div>\n     \n            <div class="warning"> <b> <p id="text">Please note that this information is only a guide. It is important to still declare \n                your allergy information to your server.</p>\n              </b></div>\n\n              <div class="green">\n                  Green = free of allergens\n                </div>\n\n\n                <div class="red">\n                    Red = contains allergens\n                  </div>\n                \n              \n\n</div>\n\n<div class="restaurantdisc">\n  Message from the restaurant:\n<br>\n<br>\n  {{item.disclaimer}}\n\n</div>\n\n   \n\n        <ion-list class="accordion-list">\n        \n          <ion-list *ngFor="let item of menuTypes | async; let i = index" no-lines no-padding>\n           \n            <button ion-item (click)="shower(i)" [ngClass]="{\'section-active\': show[i], \'section\': !show[i]}" detail-none>\n              <ion-icon item-left name="arrow-forward" *ngIf="!show[i]"></ion-icon>\n              <ion-icon item-left name="arrow-down" *ngIf="show[i]"></ion-icon>\n                {{ item.type }}\n          </button>\n          \n            \n            <ion-list *ngIf="item.children && show[i]">\n            \n                <div *ngFor="let child of item.children, let j = index" detail-none class="child-item" text-wrap>\n                  \n                  <!-- <ion-item *ngIf="!(allergies.wheat && child.wheat == \'TRUE\') && !(allergies.peanuts && child.peanuts == \'TRUE\') \n                  && !(allergies.treenuts && child.treenuts == \'TRUE\') && !(allergies.soy && child.soy == \'TRUE\')\n                  && !(allergies.milk && child.milk == \'TRUE\') && !(allergies.eggs && child.eggs == \'TRUE\')\n                  && !(allergies.shellfish && child.shellfish == \'TRUE\') && !(allergies.fish && child.fish == \'TRUE\')">\n                  \n                  -->\n\n                  <ion-item [ngClass]="!(allergies.wheat && child.wheat == \'TRUE\') && !(allergies.peanuts && child.peanuts == \'TRUE\') \n                  && !(allergies.treenuts && child.treenuts == \'TRUE\') && !(allergies.soy && child.soy == \'TRUE\')\n                  && !(allergies.milk && child.milk == \'TRUE\') && !(allergies.eggs && child.eggs == \'TRUE\')\n                  && !(allergies.shellfish && child.shellfish == \'TRUE\') && !(allergies.fish && child.fish == \'TRUE\') ? \'safe\' : \'unsafe\'">\n                    \n                  <button ion-item (click)="addToCart(child.menuItem, i, j)" detail-none [ngClass]="!(allergies.wheat && child.wheat == \'TRUE\') && !(allergies.peanuts && child.peanuts == \'TRUE\') \n                  && !(allergies.treenuts && child.treenuts == \'TRUE\') && !(allergies.soy && child.soy == \'TRUE\')\n                  && !(allergies.milk && child.milk == \'TRUE\') && !(allergies.eggs && child.eggs == \'TRUE\')\n                  && !(allergies.shellfish && child.shellfish == \'TRUE\') && !(allergies.fish && child.fish == \'TRUE\') ? \'safe\' : \'unsafe\'">\n                     \n                  <div *ngIf="!(!(allergies.wheat && child.wheat == \'TRUE\') && !(allergies.peanuts && child.peanuts == \'TRUE\') \n                  && !(allergies.treenuts && child.treenuts == \'TRUE\') && !(allergies.soy && child.soy == \'TRUE\')\n                  && !(allergies.milk && child.milk == \'TRUE\') && !(allergies.eggs && child.eggs == \'TRUE\')\n                  && !(allergies.shellfish && child.shellfish == \'TRUE\') && !(allergies.fish && child.fish == \'TRUE\'))">\n                \n                <img src="../assets/img/no.png" width="25px" height="25px">\n                </div>\n                  \n\n                  \n                  \n                  <div class="itemdesc">\n                      <ion-icon class="star" *ngIf="cart.fav[index1][i][j] == true" name=\'star\'> </ion-icon>\n                    \n                   {{ child.menuItem }}\n                   \n\n                  </div>\n                    <p class="itemdesc" *ngIf="child.desc">\n                      {{child.desc}}\n\n                      </p>\n\n\n                      <p class="itemdesc" *ngIf="allergies.milk && child.milk == \'TRUE\'">\n                        <br>\n                        \n                        CONTAINS MILK\n                      </p>\n\n                      <p class="itemdesc" *ngIf="allergies.treenuts && child.treenuts == \'TRUE\'">\n                          <br>\n                        CONTAINS TREENUTS\n                        </p>\n\n                        <p  class="itemdesc" *ngIf="allergies.wheat && child.wheat == \'TRUE\'">\n                            <br>\n                          CONTAINS GLUTEN\n                          </p>\n\n                          <p  class="itemdesc" *ngIf="allergies.soy && child.soy == \'TRUE\'">\n                              <br>\n                            CONTAINS SOY\n                            </p>\n\n\n                            <p  class="itemdesc" *ngIf="allergies.fish && child.fish == \'TRUE\'">\n                                <br>\n                              CONTAINS FISH\n                              </p>\n\n                              <p  class="itemdesc" *ngIf="allergies.shellfish && child.shellfish == \'TRUE\'">\n                                  <br>\n                                CONTAINS SHELLFISH\n                                </p>\n\n                                <p  class="itemdesc" *ngIf="allergies.eggs && child.eggs == \'TRUE\'">\n                                    <br>\n                                  CONTAINS EGGS\n                                  </p>\n\n                                  <p  class="itemdesc" *ngIf="allergies.peanuts && child.peanuts == \'TRUE\'">\n                                      <br>\n                                    CONTAINS EGGS\n                                    </p>\n    \n  \n\n\n                    \n                    \n                    </button>\n                 \n            \n                 \n                </ion-item>\n              </div>\n              </ion-list>\n            \n       \n              </ion-list>\n            </ion-list>\n    \n\n\n          \n            </ion-content>\n\n\n\n  <!--\n    <ion-list>\n        Safe items:\n        <ion-item *ngFor="let food of menuTypes | async">\n           <button ion-button>{{food.type}}</button>\n           </ion-item>\n           </ion-list>\n          -->\n<!--\n  <ion-list>\n    User reviews:\n    <ion-item *ngFor="let review of reviewsObservable | async">\n      \n        <ion-avatar item-start>\n          <img [src]="review.profile"/>\n          <h2>{{review.name}}</h2>\n        </ion-avatar>\n\n       \n\n        <div item-content>\n           <p style=""> {{review.details}} </p>\n          </div>\n        \n        \n          <div item-end>\n\n          </div>\n\n      \n    </ion-item>\n  </ion-list>\n\n-->'/*ion-inline-end:"/Users/Jordan/a1stable/src/pages/card-detail/card-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_6__providers_cart_cart__["a" /* Cart */], __WEBPACK_IMPORTED_MODULE_5__providers_allegens_allegens__["a" /* AllegensProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["d" /* Reviews */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["c" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], CardDetailPage);
    return CardDetailPage;
}());

//# sourceMappingURL=card-detail.js.map

/***/ })

});
//# sourceMappingURL=11.js.map