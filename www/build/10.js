webpackJsonp([10],{

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsPageModule", function() { return CardsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cards__ = __webpack_require__(507);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CardsPageModule = (function () {
    function CardsPageModule() {
    }
    CardsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__cards__["a" /* CardsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__cards__["a" /* CardsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__cards__["a" /* CardsPage */]
            ]
        })
    ], CardsPageModule);
    return CardsPageModule;
}());

//# sourceMappingURL=cards.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_allegens_allegens__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CardsPage = (function () {
    function CardsPage(storage, db, allergies, geolocation, navCtrl, items, reviews, modalCtrl) {
        this.storage = storage;
        this.db = db;
        this.allergies = allergies;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.items = items;
        this.reviews = reviews;
        this.modalCtrl = modalCtrl;
        this.currentItems = [];
        this.menuTypes = [];
        this.count = 0;
        this.types = [];
        this.counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.countsReal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.cardItems = this.items.query();
    }
    CardsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.countsReal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.cardItems = this.items.query();
        var _loop_1 = function (index) {
            this_1.menuTypes[index] = this_1.getReviews('/' + this_1.cardItems[index].data);
            this_1.menuTypes[index].subscribe(function (types) {
                _this.types[index] = types;
                for (var i = 0; i < types.length; i++) {
                    for (var j = 0; j < types[i].children.length - 1; j++) {
                        if (types[i].children[j].menuItem) {
                            _this.counts[index]++;
                        }
                        if (!(_this.allergies.wheat && types[i].children[j].wheat == 'TRUE') && !(_this.allergies.peanuts && types[i].children[j].peanuts == 'TRUE')
                            && !(_this.allergies.treenuts && types[i].children[j].treenuts == 'TRUE') && !(_this.allergies.soy && types[i].children[j].soy == 'TRUE')
                            && !(_this.allergies.milk && types[i].children[j].milk == 'TRUE') && !(_this.allergies.eggs && types[i].children[j].eggs == 'TRUE')
                            && !(_this.allergies.shellfish && types[i].children[j].shellfish == 'TRUE') && !(_this.allergies.fish && types[i].children[j].fish == 'TRUE')) {
                            _this.countsReal[index]++;
                        }
                    }
                }
                _this.cardItems[index].percent = ((_this.countsReal[index] / _this.counts[index]) * 100).toFixed(0);
                console.log(_this.cardItems[index].name + ":" + _this.cardItems[index].percent);
                _this.sortItems(_this.allergies.lat, _this.allergies.lng);
                _this.Cards = _this.cardItems.slice().sort(_this.percents);
            });
        };
        var this_1 = this;
        for (var index = 0; index < this.cardItems.length - 1; index++) {
            _loop_1(index);
        }
    };
    CardsPage.prototype.percents = function (a, b) {
        return b.percent - a.percent;
    };
    CardsPage.prototype.getReviews = function (listPath) {
        return this.db.list(listPath).valueChanges();
    };
    CardsPage.prototype.openItem = function (item) {
        var _this = this;
        if (item.fake == true) {
            this.navCtrl.push('FakePage', {
                item: item,
                id: item.name
            });
        }
        else {
            this.storage.set('name', item).then(function (any) {
                return _this.navCtrl.push('CardDetailPage', {
                    item: item,
                    id: item.name
                });
            });
        }
    };
    CardsPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (!val || !val.trim()) {
            this.currentItems = [];
            return;
        }
        this.currentItems = this.items.query({
            name: val
        });
    };
    CardsPage.prototype.sortItems = function (one, two) {
        var _this = this;
        var usersLocation = {
            lat: one,
            lng: two
        };
        this.cardItems.map(function (item) {
            var placeLocation = {
                lat: item.lat,
                lng: item.lng
            };
            item.distance = _this.getDistanceBetweenPoints(usersLocation, placeLocation, 'miles').toFixed(2);
        });
        /* this.cardItems.sort((locationA, locationB) => {
           return locationA.distance - locationB.distance;
       
           */
    };
    CardsPage.prototype.getDistanceBetweenPoints = function (start, end, units) {
        var earthRadius = {
            miles: 3958.8,
            km: 6371
        };
        var R = earthRadius[units || 'miles'];
        var lat1 = start.lat;
        var lon1 = start.lng;
        var lat2 = end.lat;
        var lon2 = end.lng;
        var dLat = this.toRad((lat2 - lat1));
        var dLon = this.toRad((lon2 - lon1));
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    };
    CardsPage.prototype.toRad = function (x) {
        return x * Math.PI / 180;
    };
    CardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cards',template:/*ion-inline-start:"/Users/Jordan/a1stable/src/pages/cards/cards.html"*/'\n\n<ion-header>\n  <ion-navbar>\n      <ion-title>\n          <img src="../assets/img/logo-new.png" width="40px" style="display:inline-block" height="40px"/>\n        </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content  class="card-background-page" >\n\n  \n\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="Search for specific restaurants"></ion-searchbar>\n  <div id="searchBar">\n   <ion-list>\n     <button ion-item (click)="openItem(item)" *ngFor="let item of currentItems">\n       <ion-avatar item-start>\n         <img [src]="item.profilePic" />\n       </ion-avatar>\n       <h2>{{item.name}}</h2>\n       <p>{{item.about}}</p>\n     </button>\n   </ion-list>\n   </div>\n\n\n\n\n\n\n\n\n\n  <ion-card *ngFor="let item of Cards " type="button" (click)="openItem(item)">\n\n    \n    <img id="cardimg" [src]="item.profilePic">\n  <div class="card-title"> {{item.name}} </div>\n  <div class="card-subtitle"> <b>{{item.about}}</b> </div>\n\n  <!-- <div *ngFor="let item of menuTypes[item.index] | async; let i = index">\n    <div *ngFor="let child of item.children; let j = index;">\n\n        <ion-item *ngIf="!(allergies.wheat && child.wheat == \'TRUE\') && !(allergies.peanuts && child.peanuts == \'TRUE\') \n        && !(allergies.treenuts && child.treenuts == \'TRUE\') && !(allergies.soy && child.soy == \'TRUE\')\n        && !(allergies.milk && child.milk == \'TRUE\') && !(allergies.eggs && child.eggs == \'TRUE\')\n        && !(allergies.shellfish && child.shellfish == \'TRUE\') && !(allergies.fish && child.fish == \'TRUE\') ">\n\n        \n\n          \n        \n\n        </ion-item>\n\n    </div>\n</div>\n\n-->\n\n<div class ="card-percent">\n\n\n    {{ item.percent }} % of this menu is free of your allergens\n</div>\n\n    <div class="card-dist">\n      \n            \n            <ion-icon name=\'compass\'></ion-icon>\n            {{item.distance}} miles away\n            \n          \n        </div>\n\n\n        <div class="q" *ngIf="item.fake == true">\n          ?\n        </div>\n  </ion-card>\n\n  \n\n\n\n</ion-content>'/*ion-inline-end:"/Users/Jordan/a1stable/src/pages/cards/cards.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_allegens_allegens__["a" /* AllegensProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* Items */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* Reviews */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], CardsPage);
    return CardsPage;
}());

//# sourceMappingURL=cards.js.map

/***/ })

});
//# sourceMappingURL=10.js.map