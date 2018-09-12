webpackJsonp([8],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(navCtrl, db, loadingCtrl, globalService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.globalService = globalService;
        this.catData = '';
        this.categoriesRef = db.list('categories', function (ref) { return ref.orderByChild('parentId').equalTo(0); });
        this.categories = this.categoriesRef.valueChanges();
        this.categories.subscribe(function (action) {
            _this.catData = action;
            console.log(action);
        });
    }
    CategoriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    CategoriesPage.prototype.account = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */]);
        // this.navCtrl.setRoot(AccountPage, {}, { animate: true, direction: "forward" });    
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories',template:/*ion-inline-start:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/pages/categories/categories.html"*/'<ion-header>\n\n  <ion-toolbar>\n    <button class="home-menu" ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-searchbar no-border class="search" [showCancelButton]="shouldShowCancel" (ionCancel)="onCancel($event)"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="account()">\n        <ion-icon name="contact"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="card-background-page">\n    <ion-card>\n      <div class="heading">\n        <h1>\n          <b>Shop by Categories</b>\n        </h1>\n      </div>\n    </ion-card>\n\n    <ion-card *ngFor="let category of catData">\n      \n      <ion-row>\n        <ion-col col-11>\n          <h1>{{category.categoryName}}</h1>\n        </ion-col>\n        <ion-col col-1 style="text-align: right;">\n          <h1> + </h1>\n        </ion-col>\n      </ion-row>\n    \n    </ion-card>\n  \n  </div>\n  <!-- <button ion-button round (click)="deleteItem(category.key)">Delete</button> -->\n</ion-content>'/*ion-inline-end:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/pages/categories/categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_account__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_shopping_list_create_shopping_list__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_global__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Camera, CameraOptions } from '@ionic-native/camera';



var UploadPage = /** @class */ (function () {
    function UploadPage(navCtrl, navParams, alertCtrl, camera, scanner, globalService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.scanner = scanner;
        this.globalService = globalService;
        this.toastCtrl = toastCtrl;
        this.scannedData = {};
        this.userInfo = '';
    }
    UploadPage.prototype.ngOnInit = function () {
        this.userInfo = this.globalService.userProfile;
    };
    UploadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploadPage');
    };
    UploadPage.prototype.account = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__account_account__["a" /* AccountPage */]);
        // this.navCtrl.setRoot(AccountPage, {}, { animate: true, direction: "forward" });
    };
    UploadPage.prototype.takePhoto = function () {
        this.camera.getPicture({
            quality: 95,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 500,
            targetHeight: 500,
            saveToPhotoAlbum: true
        }).then(function (profilePicture) {
            // Send the picture to Firebase Storage
            var selfieRef = Object(__WEBPACK_IMPORTED_MODULE_4_firebase__["storage"])().ref('profilePictures/user1/profilePicture.png');
            selfieRef.putString(profilePicture, 'base64', { contentType: 'image/jpg' });
        }, function (error) {
            // Log an error to the console if something goes wrong.
            console.log("ERROR -> " + JSON.stringify(error));
        });
    };
    UploadPage.prototype.scan = function () {
        var _this = this;
        this.options = {
            prompt: 'Scan your Barcode'
        };
        this.scanner.scan(this.options).then(function (data) {
            _this.scannedData = data;
        }, function (err) {
            console.log('Error: ', err);
        });
    };
    UploadPage.prototype.uploadShoppingListInfo = function () {
        var alert = this.alertCtrl.create({
            title: 'Upload Shopping List',
            message: 'Like your traditional way of shopping by creating a shopping list? Don\'t worry\, we\'ve got it covered. Just click a photo of your shopping list, and we\'ll deliver all the products to you within 3 Hours! <br> Awesome, right?',
            buttons: [
                {
                    text: 'Okay',
                    role: 'cancel',
                }
            ]
        });
        alert.present();
    };
    UploadPage.prototype.createShoppingListInfo = function () {
        var alert = this.alertCtrl.create({
            title: 'Create Shopping List',
            message: 'You can create a Shopping List here itself, either type it out or simply scan the Barcode of the product and it will be added to your list.',
            buttons: [
                {
                    text: 'Okay',
                    role: 'cancel',
                }
            ]
        });
        alert.present();
    };
    UploadPage.prototype.goToCreateShoppingListPage = function () {
        var _this = this;
        var login_status = this.userInfo.status;
        if (login_status == "true") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_shopping_list_create_shopping_list__["a" /* CreateShoppingListPage */]);
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Oops! Please login to Create Shopping List',
                duration: 1500,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__account_account__["a" /* AccountPage */]);
            });
            toast.present();
        }
    };
    UploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upload',template:/*ion-inline-start:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/pages/upload/upload.html"*/'<ion-header>\n\n  <ion-toolbar>\n    <button class="home-menu" ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-searchbar no-border class="search" [showCancelButton]="shouldShowCancel" (ionCancel)="onCancel($event)"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="scan()">\n        <ion-icon name="barcode"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="account()">\n        <ion-icon name="contact"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="card-background-page">\n    <ion-card>\n      <div class="heading">\n        <div>\n          <h1>\n            <b>Upload Shopping List </b> <span (click)="uploadShoppingListInfo()"><ion-icon name="information-circle"></ion-icon></span>\n          </h1>\n        </div>\n      </div>\n\n      <br>\n\n      <button ion-button full style="background-color: #1a1a1a;" (click)=takePhoto()>Upload</button>\n      \n    </ion-card>\n\n    <ion-card>\n      <div class="heading">\n        <h1>\n          <b>Create Shopping List </b> <span (click)="createShoppingListInfo()"><ion-icon name="information-circle"></ion-icon></span>\n        </h1>\n      </div>\n      \n      <br>\n\n      <button ion-button full style="background-color: #1a1a1a;" (click)=goToCreateShoppingListPage()>Upload</button>\n\n    </ion-card>\n\n    <ion-card *ngIf="scannedData.text">\n      <label>Your barcode is: </label>\n      <span>\n        {{scannedData.text}}\n      </span>\n    </ion-card>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/pages/upload/upload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_7__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], UploadPage);
    return UploadPage;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_account__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasketPage = /** @class */ (function () {
    function BasketPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BasketPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BasketPage');
    };
    BasketPage.prototype.account = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__account_account__["a" /* AccountPage */]);
        // this.navCtrl.setRoot(AccountPage, {}, { animate: true, direction: "forward" });
    };
    BasketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-basket',template:/*ion-inline-start:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/pages/basket/basket.html"*/'<ion-header>\n\n  <ion-toolbar>\n    <button class="home-menu" ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-searchbar no-border class="search" [showCancelButton]="shouldShowCancel" (ionCancel)="onCancel($event)"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="account()">\n        <ion-icon name="contact"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/pages/basket/basket.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BasketPage);
    return BasketPage;
}());

//# sourceMappingURL=basket.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddDetailsPage = /** @class */ (function () {
    function AddDetailsPage(loadingCtrl, navCtrl, navParams, toastCtrl, fire, db, globalService) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.fire = fire;
        this.db = db;
        this.globalService = globalService;
        this.account = {};
    }
    AddDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddDetailsPage');
    };
    AddDetailsPage.prototype.register = function () {
        var _this = this;
        this.fire.authState.subscribe(function (auth) {
            _this.db.object("users/" + auth.uid).set(_this.account);
            localStorage.setItem("userId", auth.uid);
            _this.globalService.userProfile.userId = auth.uid;
        });
        var toast = this.toastCtrl.create({
            message: 'Hello, Welcome to The Banya',
            duration: 1000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            localStorage.setItem("userName", _this.account.userName);
            localStorage.setItem("userNumber", _this.account.userNumber);
            _this.globalService.userProfile.userName = _this.account.userName;
            _this.globalService.userProfile.userNumber = _this.account.userNumber;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */], {}, { animate: true, direction: "forward" });
        });
        toast.present();
    };
    AddDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-details',template:/*ion-inline-start:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/pages/add-details/add-details.html"*/'<ion-header>\n\n  <ion-toolbar>\n    <ion-title>\n      <b>add details</b>\n    </ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="box">\n    <h1 style="text-align: center;">\n      <b>Add Details</b>\n    </h1>\n  \n    <ion-item>\n      <ion-label color="dark" floating>Name</ion-label>\n      <ion-input type="text" clearInput [(ngModel)]="account.userName"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label color="dark" floating>Mobile Number</ion-label>\n      <ion-input type="number" clearInput [(ngModel)]="account.userNumber"></ion-input>\n    </ion-item>\n    <br>\n    <br>\n  \n    <button ion-button class="btn-custom-1" (click)="register()">GO!</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/pages/add-details/add-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */]])
    ], AddDetailsPage);
    return AddDetailsPage;
}());

//# sourceMappingURL=add-details.js.map

/***/ }),

/***/ 195:
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
webpackEmptyAsyncContext.id = 195;

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		496,
		7
	],
	"../pages/add-details/add-details.module": [
		497,
		6
	],
	"../pages/basket/basket.module": [
		498,
		5
	],
	"../pages/categories/categories.module": [
		499,
		4
	],
	"../pages/create-shopping-list/create-shopping-list.module": [
		254
	],
	"../pages/product/product.module": [
		500,
		3
	],
	"../pages/search/search.module": [
		503,
		2
	],
	"../pages/startup/startup.module": [
		501,
		1
	],
	"../pages/upload/upload.module": [
		502,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 236;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_account__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.account = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__account_account__["a" /* AccountPage */]);
        // this.navCtrl.setRoot(AccountPage, {}, { animate: true, direction: "forward" });    
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-toolbar>\n    <button class="home-menu" ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-searchbar no-border class="search" [showCancelButton]="shouldShowCancel" (ionCancel)="onCancel($event)"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="account()">\n        <ion-icon name="contact"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>f\n\n<ion-content>\n\n  <div class="card-background-page">\n\n    <!-- <ion-card>\n      <ion-item *ngFor="let item of items">\n        {{item}}\n      </ion-item>\n    </ion-card> -->\n\n    <ion-card>\n      <div id="card-text">\n        <h1>Welcome to <b style="font-family: \'Dancing Script\', sans-serif;color: #F25632;">the banya</b></h1>\n        <h3>Delivering 15000+ Products with Assured Lowest Price</h3>\n      </div>\n    </ion-card>\n\n    <ion-card>\n      <img src="../../assets/imgs/bg-1.jpg" />\n    </ion-card>\n\n    <ion-card>\n      <img src="../../assets/imgs/bg-2.jpg" />\n    </ion-card>\n\n    <ion-card>\n      <img src="../../assets/imgs/bg-3.jpg" />\n    </ion-card>\n\n    <ion-card>\n      <img src="../../assets/imgs/bg-4.jpg" />\n    </ion-card>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateShoppingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
 * Generated class for the CreateShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateShoppingListPage = /** @class */ (function () {
    function CreateShoppingListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreateShoppingListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateShoppingListPage');
    };
    CreateShoppingListPage.prototype.goToHome = function () {
        this.navCtrl.pop();
    };
    CreateShoppingListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-shopping-list',template:/*ion-inline-start:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/pages/create-shopping-list/create-shopping-list.html"*/'<!-- <ion-header>\n\n  <ion-toolbar>\n	<button class="home-menu" ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-searchbar no-border class="search" [showCancelButton]="shouldShowCancel" (ionCancel)="onCancel($event)"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goToHome()">\n        <ion-icon name="md-home"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header> -->\n\n<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button (click)="goToHome()" ion-button icon-left clear small><ion-icon name="md-arrow-back"></ion-icon></button>\n    </ion-buttons>\n    <ion-title><b>create</b></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n	<div class="card-background-page">\n    <ion-card>\n      <div class="heading">\n        <h1>\n          <b>Create Shopping List </b>\n        </h1>\n      </div>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/pages/create-shopping-list/create-shopping-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CreateShoppingListPage);
    return CreateShoppingListPage;
}());

//# sourceMappingURL=create-shopping-list.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateShoppingListPageModule", function() { return CreateShoppingListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_shopping_list__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateShoppingListPageModule = /** @class */ (function () {
    function CreateShoppingListPageModule() {
    }
    CreateShoppingListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_shopping_list__["a" /* CreateShoppingListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_shopping_list__["a" /* CreateShoppingListPage */]),
            ],
        })
    ], CreateShoppingListPageModule);
    return CreateShoppingListPageModule;
}());

//# sourceMappingURL=create-shopping-list.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductPage = /** @class */ (function () {
    function ProductPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductPage');
    };
    ProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/pages/product/product.html"*/'<!--\n  Generated template for the ProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>product</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/pages/product/product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { LoginPage } from '../login/login';

var StartupPage = /** @class */ (function () {
    function StartupPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
    }
    StartupPage.prototype.ionViewDidLoad = function () {
        this.menu.swipeEnable(false);
        console.log('ionViewDidLoad StartupPage');
        localStorage.setItem("firstVisit", "1");
    };
    StartupPage.prototype.getstarted = function () {
        this.menu.swipeEnable(true);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], {}, { animate: true, direction: "forward" });
    };
    StartupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-startup',template:/*ion-inline-start:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/pages/startup/startup.html"*/'<ion-content padding id="startup">\n	<!-- <h1><b>the banya</b></h1>\n	<h3><b>ghar ki dukaan</b></h3> -->\n	<br><br><br>\n	<img src="../../assets/imgs/logo.png" alt="main-logo" class="img-centered"><br><br><br><br><br>\n	<button ion-button full id="get-started" (click)="getstarted()">Get Started</button>\n</ion-content>\n'/*ion-inline-end:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/pages/startup/startup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], StartupPage);
    return StartupPage;
}());

//# sourceMappingURL=startup.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_account__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.account = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__account_account__["a" /* AccountPage */]);
        // this.navCtrl.setRoot(AccountPage, {}, { animate: true, direction: "forward" });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar>\n    <button start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="md-menu"></ion-icon>\n      </button>\n    </button>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="account()">\n        <ion-icon name="contact"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      <b>search</b>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(422);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_categories_categories__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_search__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_basket_basket__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_account_account__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_startup_startup__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_upload_upload__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_details_add_details__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_product_product__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_create_shopping_list_create_shopping_list_module__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_barcode_scanner__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_database__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_global_global__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var firebaseAuth = {
    apiKey: "AIzaSyBCxzV-ZeZFaO0-oe4lugdHMpp5ysk1sSs",
    authDomain: "thebanya-app.firebaseapp.com",
    databaseURL: "https://thebanya-app.firebaseio.com",
    projectId: "thebanya-app",
    storageBucket: "thebanya-app.appspot.com",
    messagingSenderId: "312112616058"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_basket_basket__["a" /* BasketPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_startup_startup__["a" /* StartupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_upload_upload__["a" /* UploadPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_details_add_details__["a" /* AddDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_product_product__["a" /* ProductPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAuth),
                __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_21_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_14__pages_create_shopping_list_create_shopping_list_module__["CreateShoppingListPageModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true,
                    iconMode: 'md',
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    tabsPlacement: 'bottom',
                    menuType: 'overlay',
                    tabsLayout: 'title-hide',
                    tabsHighlight: true,
                    pageTransition: 'ios-transition'
                }, {
                    links: [
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-details/add-details.module#AddDetailsPageModule', name: 'AddDetailsPage', segment: 'add-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/basket/basket.module#BasketPageModule', name: 'BasketPage', segment: 'basket', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-shopping-list/create-shopping-list.module#CreateShoppingListPageModule', name: 'CreateShoppingListPage', segment: 'create-shopping-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/product.module#ProductPageModule', name: 'ProductPage', segment: 'product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/startup/startup.module#StartupPageModule', name: 'StartupPage', segment: 'startup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upload/upload.module#UploadPageModule', name: 'UploadPage', segment: 'upload', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_basket_basket__["a" /* BasketPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_startup_startup__["a" /* StartupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_upload_upload__["a" /* UploadPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_details_add_details__["a" /* AddDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_product_product__["a" /* ProductPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__providers_global_global__["a" /* GlobalProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_details_add_details__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AccountPage = /** @class */ (function () {
    function AccountPage(loadingCtrl, navCtrl, navParams, toastCtrl, fire, db, globalService, geo, platform) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.fire = fire;
        this.db = db;
        this.globalService = globalService;
        this.geo = geo;
        this.platform = platform;
        this.userInfo = '';
        this.loginOption = true;
        this.registerOption = false;
    }
    AccountPage.prototype.ngOnInit = function () {
        this.userInfo = this.globalService.userProfile;
    };
    AccountPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.geo.getCurrentPosition().then(function (pos) {
                _this.lat = pos.coords.latitude;
                _this.lng = pos.coords.longitude;
            })
                .catch(function (err) {
                console.log('ERROR:', JSON.stringify(err));
            });
        });
        console.log('ionViewDidLoad AccountPage');
    };
    AccountPage.prototype.goToHome = function () {
        this.navCtrl.pop();
    };
    AccountPage.prototype.alert = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'bottom'
        }).present();
    };
    AccountPage.prototype.goToLogin = function () {
        this.loginOption = true;
        this.registerOption = false;
    };
    AccountPage.prototype.goToRegister = function () {
        this.loginOption = false;
        this.registerOption = true;
    };
    AccountPage.prototype.login = function () {
        var _this = this;
        if (this.email.value && this.password.value) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
                .then(function (data) {
                var user = _this.fire.auth.currentUser;
                if (user) {
                    localStorage.setItem("userId", user.uid);
                    localStorage.setItem("userEmail", user.email);
                    localStorage.setItem("status", "true");
                    _this.globalService.userProfile.userId = user.uid;
                    _this.globalService.userProfile.userEmail = user.email;
                    _this.globalService.userProfile.status = "true";
                    _this.usersRef = _this.db.list('users/' + user.uid);
                    _this.users = _this.usersRef.valueChanges();
                    _this.users.subscribe(function (action) {
                        _this.globalService.userProfile.userName = action[0];
                        _this.globalService.userProfile.userNumber = action[1];
                        localStorage.setItem("userName", action[0]);
                        localStorage.setItem("userNumber", action[1]);
                    });
                    loading_1.dismiss();
                    _this.alert('Welcome back to The Banya!');
                    _this.navCtrl.pop();
                }
            })
                .catch(function (error) {
                // console.log("Error Login", error);
                loading_1.dismiss();
                _this.alert(error.message);
            });
            // console.log(this.email.value,this.password.value);
        }
        else {
            this.alert('Please enter all details!');
        }
    };
    AccountPage.prototype.register = function () {
        var _this = this;
        if (this.userEmail.value && this.userPassword.value && this.userConfirmPassword.value) {
            if (this.userConfirmPassword.value == this.userPassword.value) {
                var loading_2 = this.loadingCtrl.create({
                    content: 'Loading...'
                });
                loading_2.present();
                localStorage.setItem("userEmail", this.userEmail.value);
                this.globalService.userProfile.userEmail = this.userEmail.value;
                this.fire.auth.createUserWithEmailAndPassword(this.userEmail.value, this.userPassword.value)
                    .then(function (data) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__add_details_add_details__["a" /* AddDetailsPage */]);
                    loading_2.dismiss();
                })
                    .catch(function (error) {
                    loading_2.dismiss();
                    _this.alert(error.message);
                });
            }
            else {
                var toast = this.toastCtrl.create({
                    message: 'Passwords do not match! ',
                    duration: 1000,
                    position: 'bottom'
                });
                toast.onDidDismiss(function () {
                });
                toast.present();
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Please enter all details! ',
                duration: 1000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
            });
            toast.present();
        }
    };
    AccountPage.prototype.logout = function () {
        var _this = this;
        this.fire.auth.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], {}, { animate: true, direction: "forward" });
        var toast = this.toastCtrl.create({
            message: 'Signed out! Come back soon! ',
            duration: 1000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            localStorage.removeItem("status");
            localStorage.removeItem("userId");
            localStorage.removeItem("userName");
            localStorage.removeItem("userEmail");
            localStorage.removeItem("userNumber");
            _this.globalService.userProfile.status = "false";
            _this.globalService.userProfile.userId = "";
            _this.globalService.userProfile.userName = "";
            _this.globalService.userProfile.userNumber = "";
            _this.globalService.userProfile.userEmail = "";
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], AccountPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], AccountPage.prototype, "password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('userEmail'),
        __metadata("design:type", Object)
    ], AccountPage.prototype, "userEmail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('userPassword'),
        __metadata("design:type", Object)
    ], AccountPage.prototype, "userPassword", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('userConfirmPassword'),
        __metadata("design:type", Object)
    ], AccountPage.prototype, "userConfirmPassword", void 0);
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/pages/account/account.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button (click)="goToHome()" ion-button icon-left clear small><ion-icon name="md-arrow-back"></ion-icon></button>\n    </ion-buttons>\n    <ion-title *ngIf="this.fire.auth.currentUser">\n      <b>my account</b>\n    </ion-title>\n\n    <ion-title *ngIf="!this.fire.auth.currentUser">\n      <b>account</b>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content *ngIf="this.fire.auth.currentUser">\n    <!-- If User Is Logged In -->\n\n    <div class="profile-page">\n      <h2>{{userInfo.userName}}</h2><hr>\n      <h3>{{userInfo.userEmail}}</h3>\n      <h3>+91 {{userInfo.userNumber}}</h3> \n      <h3>Current Location: {{lat}} | {{lng}}</h3>\n    </div>\n\n    <div class="box">\n      \n      <ion-row>\n      \n        <ion-col col-2>\n          <h2><ion-icon name="md-locate"></ion-icon></h2>\n        </ion-col>\n\n        <ion-col col-10>\n          <h2>Delivery Address</h2>\n        </ion-col>\n      \n      </ion-row>\n      <hr>\n      <ion-row (click)="editProfile()">\n      \n        <ion-col col-2>\n          <h2><ion-icon name="md-create"></ion-icon></h2>\n        </ion-col>\n\n        <ion-col col-10>\n          <h2>Edit Profile</h2>\n        </ion-col>\n      \n      </ion-row>\n      <hr>\n      <ion-row>\n      \n        <ion-col col-2>\n          <h2><ion-icon name="md-timer"></ion-icon></h2>\n        </ion-col>\n\n        <ion-col col-10>\n          <h2>Orders</h2>\n        </ion-col>\n      \n      </ion-row>\n      <hr>\n      <ion-row>\n      \n        <ion-col col-2>\n          <h2><ion-icon name="md-lock"></ion-icon></h2>\n        </ion-col>\n\n        <ion-col col-10>\n          <h2>Change Password</h2>\n        </ion-col>\n      \n      </ion-row>\n      <hr>\n      <ion-row (click)="logout()">\n      \n        <ion-col col-2>\n          <h2><ion-icon name="md-log-out"></ion-icon></h2>\n        </ion-col>\n\n        <ion-col col-10>\n          <h2>Logout</h2>\n        </ion-col>\n      \n      </ion-row>\n\n      <br><br><br>\n\n    </div>\n\n\n</ion-content>  \n\n<ion-content padding *ngIf="!this.fire.auth.currentUser">\n    \n    <div class="box">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <button ion-button full style="background-color: #1a1a1a;" (click)="goToLogin()">LOGIN</button>\n          </ion-col>\n          <ion-col col-6>\n            <button ion-button full style="background-color: #1a1a1a;" (click)="goToRegister()">REGISTER</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </div>\n\n    <br>\n\n    <div class="box" *ngIf="loginOption">\n      <h1 style="text-align: center;"><b>Login</b></h1>\n      <ion-item>\n        <ion-label color="dark" floating>Email</ion-label>\n        <ion-input type="email" clearInput #email></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="dark" floating>Password</ion-label>\n        <ion-input type="password" clearInpu #password></ion-input>\n      </ion-item><br>\n      <button ion-button class="btn-custom-1" (click)="login()">GO!</button><br><br>\n    </div>\n\n    <div class="box" *ngIf="registerOption">\n      <h1 style="text-align: center;"><b>Register</b></h1>\n    \n      <ion-item>\n        <ion-label color="dark" floating>Email</ion-label>\n        <ion-input type="email" clearInput #userEmail></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label color="dark" floating>Password</ion-label>\n        <ion-input type="password" clearInput #userPassword></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="dark" floating>Confirm Password</ion-label>\n        <ion-input type="password" clearInput #userConfirmPassword></ion-input>\n      </ion-item><br><br>\n    \n      <button ion-button class="btn-custom-1" (click)="register()">GO!</button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { StartupPage } from '../pages/startup/startup';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.statusBar = statusBar;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // statusBar.styleDefault();
            _this.statusBar.overlaysWebView(true);
            _this.statusBar.backgroundColorByHexString('#ffffff');
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/app/app.html"*/'<ion-menu type="overlay" [content]="content">\n    <ion-header id="menu-header">\n        <h2><b>the banya</b></h2>\n    </ion-header>\n    <ion-content padding>\n        <ion-list id="menu-list">\n            <li>\n                <a>Smart Shopping List</a>\n            </li>\n            <li>\n                <a>Offers</a>\n            </li>\n            <li>\n                <a>Customer Service</a>\n            </li>\n            <li>\n                <a>About</a>\n            </li>\n            <li>\n                <a>Contact</a>\n            </li>\n            <li>\n                <a>FAQs</a>\n            </li>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content></ion-nav>'/*ion-inline-end:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories_categories__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__upload_upload__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basket_basket__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__categories_categories__["a" /* CategoriesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__upload_upload__["a" /* UploadPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__basket_basket__["a" /* BasketPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/pages/tabs/tabs.html"*/'<ion-tabs #myTabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="md-home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Categories" tabIcon="md-apps"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Shopping List" tabIcon="md-list-box"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Basket" tabIcon="md-cart"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/media/whip-scorpion/Local Disk/App Development/Ionic 3/banya/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalProvider = /** @class */ (function () {
    function GlobalProvider() {
        this.userProfile = {
            status: localStorage.getItem("status"),
            userId: localStorage.getItem("userId"),
            userName: localStorage.getItem("userName"),
            userNumber: localStorage.getItem("userNumber"),
            userEmail: localStorage.getItem("userEmail")
        };
    }
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ })

},[299]);
//# sourceMappingURL=main.js.map