webpackJsonp([9],{

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavsPageModule", function() { return FavsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favs__ = __webpack_require__(509);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FavsPageModule = (function () {
    function FavsPageModule() {
    }
    FavsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__favs__["a" /* FavsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favs__["a" /* FavsPage */]),
            ],
        })
    ], FavsPageModule);
    return FavsPageModule;
}());

//# sourceMappingURL=favs.module.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(319);
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
 * Generated class for the FavsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavsPage = (function () {
    function FavsPage(cartp, navCtrl, navParams, socialSharing) {
        this.cartp = cartp;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socialSharing = socialSharing;
    }
    FavsPage.prototype.compilemsg = function () {
        if (this.cart.length != 0) {
            var msg = this.cart[0];
            for (var index = 1; index < this.cart.length; index++) {
                msg.concat("\n " + this.cart[index]);
            }
            return msg.concat(" \n Sent from Pallergy !");
        }
    };
    FavsPage.prototype.otherShare = function () {
        console.log("hi");
        this.socialSharing.share("Genral Share Sheet", null /*Subject*/, null /*File*/, "https://pointdeveloper.com")
            .then(function () {
            alert("Success");
        }, function () {
            alert("failed");
        });
    };
    FavsPage.prototype.share = function () {
        var msg = this.compilemsg();
        this.socialSharing.share(msg, null, null, null);
    };
    FavsPage.prototype.ngOnInit = function () {
        this.cart = this.cartp.cart;
        this.clear = false;
    };
    FavsPage.prototype.clearC = function () {
        this.cartp.clear = true;
        this.cartp.clearCart();
        this.cart = this.cartp.cart;
        this.clear = this.cartp.clear;
        this.clear = false;
    };
    FavsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favs',template:/*ion-inline-start:"/Users/Jordan/a1stable/src/pages/favs/favs.html"*/'<!--\n  Generated template for the FavsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n      <ion-title>\n          <img src="../assets/img/logo-new.png" width="40px" style="display:inline-block" height="40px"/>\n        </ion-title>\n    <ion-buttons end>\n    <button ion-button icon-only (click)="clearC()">\n      Clear all \n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-detail-page">\n  <div class="heading">Favorites List</div>\n\n  <div class="intro">\n    Tap your favorite menu items to save them for later and share with friends.\n  </div>\n  <br>\n  <div id="share-buttons">\n    \n     \n      <!-- Email -->\n      <a href="mailto:?Subject=Check out Pallergy&amp;Body=Check out this awesome list of allergy friendly dishes I built using Pallergy, a mobile help that helps you to find food that won\'t hurt you: {{cart}}">\n          <img src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" />\n      </a>\n   \n      <!-- Facebook -->\n      <a href="http://www.facebook.com/sharer.php?u=mypallergy.com" target="_blank">\n          <img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />\n      </a>\n      \n       \n      <!-- Twitter -->\n      <a href="https://twitter.com/share?url=https://mypallergy.com&amp;text=Check out this awesome list of allergy friendly dishes I built using Pallergy, a mobile help that helps you to find food that won\'t hurt you: {{cart}}&amp;hashtags=#myPallergy" target="_blank">\n          <img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />\n      </a>\n      \n\n  \n  </div>\n\n  \n\n\n  \n    <ion-list *ngFor="let item of cart" class="favs">\n<div *ngIf="clear == false">\n  <ion-item [ngClass]="\'even\'">\n    {{item}}\n  </ion-item>\n  </div>\n</ion-list>\n  \n  \n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Jordan/a1stable/src/pages/favs/favs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__["a" /* Cart */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], FavsPage);
    return FavsPage;
}());

//# sourceMappingURL=favs.js.map

/***/ })

});
//# sourceMappingURL=9.js.map