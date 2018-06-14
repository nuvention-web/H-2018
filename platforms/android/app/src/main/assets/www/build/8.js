webpackJsonp([8],{

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListPageModule = (function () {
    function ListPageModule() {
    }
    ListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list__["a" /* ListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list__["a" /* ListPage */]),
            ],
        })
    ], ListPageModule);
    return ListPageModule;
}());

//# sourceMappingURL=list.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_allegens_allegens__ = __webpack_require__(314);
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
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListPage = (function () {
    function ListPage(allergies, navCtrl, navParams) {
        this.allergies = allergies;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.peanuts = false;
        this.treenuts = false;
        this.wheat = false;
        this.milk = false;
        this.soy = false;
        this.eggs = false;
        this.fish = false;
        this.shellfish = false;
    }
    ListPage.prototype.ngOnInit = function () {
        this.last = this.navCtrl.getPrevious().component.name;
    };
    ListPage.prototype.done = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["b" /* MainPage */]);
    };
    ListPage.prototype.done2 = function () {
        this.navCtrl.pop();
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/Jordan/a1stable/src/pages/list/list.html"*/'\n<ion-header>\n\n  <ion-navbar>\n      <ion-title>\n          <img src="../assets/img/logo-new.png" width="40px" style="display:inline-block" height="40px"/>\n        </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-detail-page">\n\n\n  <div class="heading">Please select the allergens you would like to avoid:</div>\n\n    <ion-list class="list1">\n\n        <ion-item no-lines class="list1">\n          <ion-label>Peanuts</ion-label>\n          <ion-checkbox color="secondary" [(ngModel)]="allergies.peanuts"></ion-checkbox>\n        </ion-item>\n      \n        <ion-item no-lines class="list2">\n          <ion-label>Tree Nuts</ion-label>\n          <ion-checkbox color="secondary" [(ngModel)]="allergies.treenuts"></ion-checkbox>\n        </ion-item>\n\n        <ion-item no-lines class="list1">\n            <ion-label>Wheat (Gluten)</ion-label>\n            <ion-checkbox color="secondary" [(ngModel)]="allergies.wheat"></ion-checkbox>\n          </ion-item>\n\n          <ion-item no-lines class="list2">\n              <ion-label>Soy</ion-label>\n              <ion-checkbox color="secondary" [(ngModel)]="allergies.soy"></ion-checkbox>\n            </ion-item>\n\n\n            <ion-item no-lines class="list1">\n                <ion-label>Milk</ion-label>\n                <ion-checkbox color="secondary" [(ngModel)]="allergies.milk"></ion-checkbox>\n              </ion-item>\n\n              <ion-item no-lines class="list2">\n                  <ion-label>Eggs</ion-label>\n                  <ion-checkbox color="secondary" [(ngModel)]="allergies.eggs"></ion-checkbox>\n                </ion-item>\n\n                <ion-item no-lines class="list1">\n                    <ion-label>Fish</ion-label>\n                    <ion-checkbox color="secondary" [(ngModel)]="allergies.fish"></ion-checkbox>\n                  </ion-item>\n\n                  <ion-item no-lines class="list2">\n                      <ion-label>Shellfish</ion-label>\n                      <ion-checkbox [(ngModel)]="allergies.shellfish" color="secondary"></ion-checkbox>\n                    </ion-item>\n      \n      </ion-list>\n      <div text-center *ngIf="last != \'SettingsPage\'">\n      <button ion-button block (click)="done()" color="secondary">Done</button>\n      </div>\n\n      <div text-center *ngIf="last == \'SettingsPage\'">\n          <button ion-button block (click)="done2()" color="secondary">Done</button>\n          </div>\n\n      <div class="disc">Don\'t see your allergen listed? We\'re always trying to update our service - don\'t hesitate to contact us at mypallergy@gmail.com </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Jordan/a1stable/src/pages/list/list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_allegens_allegens__["a" /* AllegensProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ })

});
//# sourceMappingURL=8.js.map