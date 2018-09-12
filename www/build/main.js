webpackJsonp([12],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories_categories__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__upload_upload__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basket_basket__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(27);
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
    function TabsPage(globalService) {
        this.globalService = globalService;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__categories_categories__["a" /* CategoriesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__upload_upload__["a" /* UploadPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__basket_basket__["a" /* BasketPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/tabs/tabs.html"*/'<ion-tabs #myTabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="md-home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Categories" tabIcon="md-apps"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Shopping List" tabIcon="md-list-box"></ion-tab>\n  <!-- <ion-tab [root]="tab4Root" tabTitle="Basket" tabIcon="md-cart" tabBadge="{{totalProducts}}" tabBadgeStyle="custom"></ion-tab> -->\n  <ion-tab [root]="tab4Root" tabTitle="Basket" tabIcon="md-cart"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(27);
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
            localStorage.setItem("status", "true");
            localStorage.setItem("userName", _this.account.userName);
            localStorage.setItem("userNumber", _this.account.userNumber);
            _this.globalService.userProfile.status = "true";
            _this.globalService.userProfile.userName = _this.account.userName;
            _this.globalService.userProfile.userNumber = _this.account.userNumber;
            _this.navCtrl.pop();
        });
        toast.present();
    };
    AddDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-details',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/add-details/add-details.html"*/'<ion-header>\n\n  <ion-toolbar>\n    <ion-title>\n      <b>add details</b>\n    </ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="box">\n    <h1 style="text-align: center;">\n      <b>Add Details</b>\n    </h1>\n  \n    <ion-item>\n      <ion-label color="dark" floating>Name</ion-label>\n      <ion-input type="text" clearInput [(ngModel)]="account.userName"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label color="dark" floating>Mobile Number</ion-label>\n      <ion-input type="number" clearInput [(ngModel)]="account.userNumber"></ion-input>\n    </ion-item>\n    <br>\n    <br>\n  \n    <button ion-button class="btn-custom-1" (click)="register()">GO!</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/add-details/add-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */]])
    ], AddDetailsPage);
    return AddDetailsPage;
}());

//# sourceMappingURL=add-details.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(27);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageAddressPage = /** @class */ (function () {
    function ManageAddressPage(navCtrl, navParams, db, globalService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.globalService = globalService;
        this.toastCtrl = toastCtrl;
        this.userInfo = {};
        this.showAddress = false;
        this.userInfo = this.globalService.userProfile;
        this.addressRef = db.list('address/' + this.userInfo.userId + '/');
        this.address = this.addressRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    }
    ManageAddressPage.prototype.addAddressButton = function () {
        this.showAddress = true;
    };
    ManageAddressPage.prototype.addAddress = function (addressone, addresstwo, pincode, city) {
        if (addressone && addresstwo && pincode && city) {
            if (city == "Lucknow") {
                var userAddress = addressone + ', ' + addresstwo + ', ' + city + ' - ' + pincode;
                this.globalService.userProfile.userAddress = userAddress;
                localStorage.setItem("userAddress", userAddress);
                this.addressRef.push({ userAddress: userAddress });
                this.showAddress = false;
                var toast = this.toastCtrl.create({
                    message: 'Address added successfully!',
                    duration: 2000,
                    position: 'bottom'
                });
                // toast.onDidDismiss(() => {
                // });
                toast.present();
            }
            else {
                var toast = this.toastCtrl.create({
                    message: 'Oops! We currently service only in Lucknow.',
                    duration: 1500,
                    position: 'bottom'
                });
                // toast.onDidDismiss(() => {
                // });
                toast.present();
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Please enter all details.',
                duration: 1000,
                position: 'bottom'
            });
            // toast.onDidDismiss(() => {
            // });
            toast.present();
        }
    };
    ManageAddressPage.prototype.deleteAddress = function (key) {
        this.addressRef.remove(key);
        this.showAddress = false;
        var toast = this.toastCtrl.create({
            message: 'Address deleted successfully.',
            duration: 1000,
            position: 'bottom'
        });
        // toast.onDidDismiss(() => {
        // });
        toast.present();
    };
    ManageAddressPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ManageAddressPage');
    };
    ManageAddressPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ManageAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-manage-address',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/manage-address/manage-address.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button (click)="goBack()" ion-button icon-left clear small><ion-icon name="ios-arrow-back-outline"></ion-icon></button>\n    </ion-buttons>\n    <ion-title><b>manage address</b></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n	<ion-fab right bottom (click)="addAddressButton()">\n    <button ion-fab color="dark"><ion-icon name="md-add"></ion-icon></button>\n  </ion-fab>\n\n	<div class="card-background-page">\n		\n		<ion-card *ngFor="let address of address | async">\n			<ion-row>\n\n				<ion-col col-10>\n					<h2>{{address.userAddress}}</h2>\n        </ion-col>\n\n        <ion-col col-2>\n          <button ion-button full round style="background-color: #1a1a1a;" (click)="deleteAddress(address.key)"><ion-icon name="md-trash"></ion-icon></button>          \n        </ion-col>\n\n			</ion-row>\n			\n		</ion-card>\n\n		<ion-card *ngIf="showAddress">\n    	<ion-row>\n    		<ion-col col-12>\n	    		<h1>Add Address</h1><hr>\n\n	    		<ion-item>\n		        <ion-label color="dark" floating>Address Line I</ion-label>\n		        <ion-input type="text" clearInput #addressone></ion-input>\n		      </ion-item>\n	    		\n	    		<ion-item>\n		        <ion-label color="dark" floating>Address Line II</ion-label>\n		        <ion-input type="text" clearInput #addresstwo></ion-input>\n		      </ion-item>\n\n		      <ion-item>\n		        <ion-label color="dark" floating>Pincode</ion-label>\n		        <ion-input type="number" clearInput #pincode></ion-input>\n		      </ion-item>\n\n		      <ion-item>\n		        <ion-label color="dark" floating>City</ion-label>\n		        <ion-input type="text" clearInput #city value="Lucknow"></ion-input>\n		      </ion-item>\n\n		      <br><br>\n\n		      <button ion-button full round style="background-color: #1a1a1a;" (click)="addAddress(addressone.value,addresstwo.value,pincode.value,city.value)">Add Address</button><br>\n    			\n    		</ion-col>\n\n    	</ion-row>\n\n    	<br><br>\n\n    </ion-card>\n\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/manage-address/manage-address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ManageAddressPage);
    return ManageAddressPage;
}());

//# sourceMappingURL=manage-address.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(27);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrdersPage = /** @class */ (function () {
    function OrdersPage(navCtrl, navParams, db, globalService, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.globalService = globalService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.userInfo = {};
        this.userInfo = this.globalService.userProfile;
        this.ordersRef = db.list('orders/createShoppingList/' + this.userInfo.userId + '/');
        this.orders = this.ordersRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    }
    OrdersPage.prototype.showStatusInfo = function () {
        var alert = this.alertCtrl.create({
            title: 'Order Status Info',
            message: '<h5><b>Pending: </b>Your Shopping List is with us and we are revieweing it. We will get back to you in no time with the complete order details including the overall cost of the list.</h5><h5><b>Confirmed: </b>Your shopping list has been confirmed by us, and we have provided you with the complete order details. After this you can either confirm your order or cancel it.</h5><h5><b>Approved: </b>You have reviewed and approved the confirmed shopping list and want us to deliver the products in the shopping list.</h5><h5><b>Completed: </b>The products listed in your shopping list have been delivered and payment has been recieved by us.</h5><h5><b>Cancelled: </b>Your order got cancelled either because you cancelled it or there was error.</h5>',
            buttons: [
                {
                    text: 'Awesome!',
                    role: 'cancel',
                }
            ]
        });
        alert.present();
    };
    OrdersPage.prototype.confirmOrder = function (key) {
        this.ordersRef.update(key, { listStatus: "Approved" });
        var toast = this.toastCtrl.create({
            message: 'Order confirmed. Thank you so much for placing your order with us! ',
            duration: 1500,
            position: 'bottom'
        });
        // toast.onDidDismiss(() => {
        // });
        toast.present();
    };
    OrdersPage.prototype.cancelOrder = function (key) {
        this.ordersRef.update(key, { listStatus: "Cancelled" });
        var toast = this.toastCtrl.create({
            message: 'Order cancelled.',
            duration: 1500,
            position: 'bottom'
        });
        // toast.onDidDismiss(() => {
        // });
        toast.present();
    };
    OrdersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrdersPage');
    };
    OrdersPage.prototype.goToHome = function () {
        this.navCtrl.pop();
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orders',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/orders/orders.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button (click)="goToHome()" ion-button icon-left clear small><ion-icon name="ios-arrow-back-outline"></ion-icon></button>\n    </ion-buttons>\n\n    <ion-title><b>orders</b></ion-title>\n  \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="card-background-page">\n\n		<ion-card *ngFor="let order of orders | async">\n			<ion-row>\n				<ion-col col-12>\n\n					<ion-row>\n						<ion-col col-7>\n							<h3><b>{{order.orderId}}</b></h3>\n						</ion-col>\n						<ion-col col-5 style="text-transform: uppercase;text-align: right;">\n							<h3 *ngIf="order.listStatus == \'Pending\'"><b style="color:orange;">{{order.listStatus}} </b> <ion-icon (click)="showStatusInfo()" name="md-information-circle"></ion-icon></h3>\n							\n							<h3 *ngIf="order.listStatus == \'Confirmed\'"><b style="color:blue;">{{order.listStatus}} </b> <ion-icon (click)="showStatusInfo()" name="md-information-circle"></ion-icon></h3>\n\n							<h3 *ngIf="order.listStatus == \'Approved\'"><b style="color:teal;">{{order.listStatus}} </b> <ion-icon (click)="showStatusInfo()" name="md-information-circle"></ion-icon></h3>\n							\n							<h3 *ngIf="order.listStatus == \'Completed\'"><b style="color:green;">{{order.listStatus}} </b> <ion-icon (click)="showStatusInfo()" name="md-information-circle"></ion-icon></h3>\n							\n							<h3 *ngIf="order.listStatus == \'Cancelled\'"><b style="color:red;">{{order.listStatus}} </b> <ion-icon (click)="showStatusInfo()" name="md-information-circle"></ion-icon></h3>\n						</ion-col>\n					</ion-row>\n\n					<hr>\n\n					<div *ngIf="order.listStatus == \'Pending\'">\n						<ion-row>\n							<ion-col col-12>\n								<table style="overflow-x: scroll;text-align: left;">\n									<thead>\n										<tr>\n											<th width="50%">Item Name</th>\n										</tr>\n									</thead>\n									<tbody>\n										<tr *ngFor="let item of order.listContent;let i = index">\n											<td>{{item}}</td>\n										</tr>\n									</tbody>\n								</table>\n							</ion-col>\n						</ion-row>\n\n					<hr>\n				\n					</div>\n\n					<div *ngIf="order.listStatus != \'Pending\'">\n\n						<ion-row>\n							<ion-col col-12 style="overflow-x: scroll;">\n								<table style="width: 500px; overflow-x: scroll;text-align: left;">\n									<thead>\n										<tr>\n											<th width="50%">Item Name</th>\n											<th width="16.67%">M.R.P.</th> \n											<th width="16.67%">Our Price</th>\n											<th width="16.67%" style="color: green;">Saving</th>\n										</tr>\n									</thead>\n									<tbody>\n										<tr *ngFor="let item of order.listContent;let i = index">\n											<td>{{item}}</td>\n											<td style="color: #999;">₹ {{order.listPrice[i]}}</td>\n											<td>₹ {{order.listOurPrice[i]}}</td>\n											<td style="color: green;">₹ {{order.listPrice[i] - order.listOurPrice[i]}}</td>\n										</tr>\n									</tbody>\n									<tfoot>\n										<tr>\n											<th><b>Total</b></th>\n											<th style="color: #999;">₹ {{order.priceTotal}}</th>\n											<th><b>₹ {{order.ourPriceTotal}}</b></th>\n											<th style="color: green;"><b>₹ {{order.savingTotal}}</b></th>\n										</tr>\n										<p style="color: #999;">Scroll left to see the complete table <ion-icon name="md-arrow-forward"></ion-icon></p>\n									</tfoot>\n								</table>\n							</ion-col>\n						</ion-row>\n						<hr>\n						<ion-row>\n							<ion-col col-6>\n								<h2>Total Price: <b>₹ {{order.ourPriceTotal}}</b></h2>\n							</ion-col>\n							<ion-col col-6>\n								<h2>Total Saving: <b style="color: green;">₹ {{order.priceTotal - order.ourPriceTotal}}</b></h2>\n							</ion-col>\n						</ion-row>\n					<hr>\n					</div>\n\n					<h2><b>Delivery Address</b></h2>\n					<h3>\n						{{order.userAddress}}\n					</h3>\n					<hr>\n					<ion-row>\n						<ion-col col-6>\n							<p>Ordered on <b>{{order.orderDate}}</b></p>\n						</ion-col>\n						<ion-col col-6 *ngIf="order.listStatus == \'Completed\'">\n							<p *ngIf="order.deliveryDate">Delivered on <b>{{order.deliveryDate}}</b></p>\n						</ion-col>\n					</ion-row>\n					<hr>\n					<ion-row>\n						<ion-col col-12>\n							<p style="color: #999;">Please don\'t hesitate to <a href="">Contact us</a> if you have any queries.</p>\n						</ion-col>\n					</ion-row>\n				</ion-col>\n			<hr>\n			</ion-row>\n				<ion-row *ngIf="order.listStatus == \'Confirmed\'">\n					<ion-col col-6>\n						<button ion-button full round style="background-color: #1a1a1a;" (click)="confirmOrder(order.key)">Confirm Order</button>\n					</ion-col>\n					<ion-col col-6>\n						<button ion-button full round style="background-color: #1a1a1a;" (click)="cancelOrder(order.key)">Cancel Order</button>\n					</ion-col>\n				</ion-row>\n		</ion-card>\n	</div>\n</ion-content>'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/orders/orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(27);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddAddressPage = /** @class */ (function () {
    function AddAddressPage(navCtrl, navParams, db, globalService, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.globalService = globalService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userInfo = {};
        this.orderInfo = {};
        this.showAddress = false;
        this.proceedButton = false;
        this.userInfo = this.globalService.userProfile;
        this.orderInfo = this.globalService.createShopListOrders;
        this.addressRef = db.list('address/' + this.userInfo.userId + '/');
        this.address = this.addressRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
        this.itemsRef = db.list('createShopList/' + this.userInfo.userId + '/');
        this.orderRef = db.list('orders/createShoppingList/' + this.userInfo.userId + '/');
    }
    AddAddressPage.prototype.addAddressButton = function () {
        this.showAddress = true;
    };
    AddAddressPage.prototype.addressSelected = function (addressKey, addressValue) {
        localStorage.setItem("selectedAddress", addressValue);
        this.globalService.createShopListOrders.selectedAddress = addressValue;
        this.showAddress = false;
        this.proceedButton = true;
    };
    AddAddressPage.prototype.addAddress = function (addressone, addresstwo, pincode, city) {
        if (addressone && addresstwo && pincode && city) {
            if (city == "Lucknow") {
                var userAddress = addressone + ', ' + addresstwo + ', ' + city + ' - ' + pincode;
                this.globalService.userProfile.userAddress = userAddress;
                localStorage.setItem("userAddress", userAddress);
                this.addressRef.push({
                    userAddress: userAddress
                });
                this.showAddress = false;
                var toast = this.toastCtrl.create({
                    message: 'Address added successfully.',
                    duration: 1000,
                    position: 'bottom'
                });
                // toast.onDidDismiss(() => {
                // });
                toast.present();
            }
            else {
                var toast = this.toastCtrl.create({
                    message: 'Oops! We currently service only in Lucknow.',
                    duration: 1500,
                    position: 'bottom'
                });
                // toast.onDidDismiss(() => {
                // });
                toast.present();
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Please enter all details.',
                duration: 1000,
                position: 'bottom'
            });
            // toast.onDidDismiss(() => {
            // });
            toast.present();
        }
    };
    AddAddressPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddAddressPage');
    };
    AddAddressPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    AddAddressPage.prototype.proceed = function () {
        var _this = this;
        if (this.globalService.createShopListOrders.selectedAddress) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            var date = new Date;
            var completeDate = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString() + "-" + date.getDate().toString();
            this.orderRef.push({
                orderId: "TBOID/" + completeDate.toString() + "/#" + Math.floor((Math.random() * 100000)),
                orderDate: completeDate,
                userAddress: this.globalService.createShopListOrders.selectedAddress,
                listContent: this.globalService.listContent,
                listStatus: "Pending"
            });
            this.globalService.createShopListOrders.selectedAddress = '';
            localStorage.removeItem("selectedAddress");
            this.itemsRef.remove();
            this.globalService.listContent = [];
            var toast = this.toastCtrl.create({
                message: 'Thank you so much for your order with The Banya. We will get back to with the complete order details within half an hour.',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                loading_1.dismiss();
                _this.navCtrl.popToRoot();
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Please select an address or add a new one.',
                duration: 1000,
                position: 'bottom'
            });
            // toast.onDidDismiss(() => {
            // });
            toast.present();
        }
    };
    AddAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-address',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/add-address/add-address.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button (click)="goBack()" ion-button icon-left clear small><ion-icon name="ios-arrow-back-outline"></ion-icon></button>\n    </ion-buttons>\n    <ion-title><b>add address</b></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="card-background-page">\n    <ion-card>\n    	<ion-row>\n    		<ion-col col-12>\n	    	  <h1>Personal Details</h1><hr>\n          <p>These are your Personal Details. You can change them from Edit Profile options in your Account page.</p>\n\n		      <ion-label color="dark">Full Name</ion-label>\n	    		<h2><b>{{userInfo.userName}}</b></h2>\n\n		      <ion-label color="dark">Email</ion-label>\n	    		<h2><b>{{userInfo.userEmail}}</b></h2>\n\n		      <ion-label color="dark">Mobile Number</ion-label>\n	    		<h2><b>{{userInfo.userNumber}}</b></h2>\n\n    		</ion-col>\n    	</ion-row>\n    </ion-card>\n\n    <ion-card text-wrap>\n    	<ion-row>\n    		<ion-col col-12>\n          <h1>Delivery Address</h1><hr>\n          <p>Please select your desired Delivery Address</p>\n    			<ion-list radio-group>\n				  <ion-item *ngFor="let address of address | async">\n				    <ion-label>{{address.userAddress}}</ion-label>\n				    <ion-radio [value]="address.key" (ionSelect)="addressSelected(address.key,address.userAddress)"></ion-radio>\n				  </ion-item>\n				</ion-list>\n    		</ion-col>\n    	</ion-row>\n    	<ion-row>\n    		<ion-col col-12>\n    		<button ion-button full round style="background-color: #1a1a1a;" (click)="addAddressButton()">Add Address</button>\n    		</ion-col>\n    	</ion-row>\n    </ion-card>\n\n    <ion-card *ngIf="showAddress">\n    	<ion-row>\n    		<ion-col col-12>\n	    		<h1>Address Details</h1><hr>\n\n	    		<ion-item>\n		        <ion-label color="dark" floating>Address Line I</ion-label>\n		        <ion-input type="text" clearInput #addressone></ion-input>\n		      </ion-item>\n	    		\n	    		<ion-item>\n		        <ion-label color="dark" floating>Address Line II</ion-label>\n		        <ion-input type="text" clearInput #addresstwo></ion-input>\n		      </ion-item>\n\n		      <ion-item>\n		        <ion-label color="dark" floating>Pincode</ion-label>\n		        <ion-input type="number" clearInput #pincode></ion-input>\n		      </ion-item>\n\n		      <ion-item>\n		        <ion-label color="dark" floating>City</ion-label>\n		        <ion-input type="text" clearInput #city value="Lucknow"></ion-input>\n		      </ion-item>\n\n		      <br><br>\n\n		      <button ion-button full round style="background-color: #1a1a1a;" (click)="addAddress(addressone.value,addresstwo.value,pincode.value,city.value)">Add Address</button><br>\n\n    			\n    		</ion-col>\n\n    	</ion-row>\n    	<br><br>\n\n    </ion-card>\n\n    <ion-card *ngIf="proceedButton">\n    	<ion-row>\n    		<ion-col col-12>\n		      <button ion-button full round style="background-color: #1a1a1a;" (click)="proceed()">Proceed</button>\n			</ion-col>\n    	</ion-row>\n    </ion-card>\n\n    <ion-card *ngIf="proceedButton">\n    	<ion-row>\n    		<ion-col col-12>\n		      <p>\n		      	<b>NOTE:</b> After you click <b>Proceed</b>, we will get back to you within half an hour with the complete order details, including the total cost price of the shopping list. After that you can confirm your order, and we\'ll deliver all the products to you within 3 hours.\n		      </p>\n			</ion-col>\n    	</ion-row>\n    </ion-card>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/add-address/add-address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AddAddressPage);
    return AddAddressPage;
}());

//# sourceMappingURL=add-address.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(27);
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





var BasketPage = /** @class */ (function () {
    function BasketPage(navCtrl, navParams, db, globalService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.globalService = globalService;
        this.toastCtrl = toastCtrl;
        this.show_cart = [];
        this.cart = [];
        this.productQuantityId = [];
        this.productQuantity = [];
        this.emptyCart = true;
        this.totalProducts = 0;
        this.tab = this.navCtrl.parent;
    }
    BasketPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BasketPage');
    };
    BasketPage.prototype.account = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */]);
    };
    BasketPage.prototype.goToHome = function () {
        this.tab.select(0);
    };
    BasketPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var productKey;
        var quantityId;
        var productQuantity;
        var sum = 0;
        if (localStorage.getItem("cart")) {
            this.show_cart = JSON.parse(localStorage.getItem("cart"));
            if (this.show_cart.length != 0) {
                this.cart = [];
                this.totalProducts = this.show_cart.length;
                this.emptyCart = false;
                var _loop_1 = function (i) {
                    productKey = this_1.show_cart[i][0];
                    quantityId = this_1.show_cart[i][1];
                    productQuantity = this_1.show_cart[i][2];
                    this_1.productsRef = this_1.db.list('products/', function (ref) { return ref.orderByKey().equalTo(productKey); });
                    this_1.products = this_1.productsRef.valueChanges();
                    this_1.products.subscribe(function (action) {
                        _this.cart.push(action[0]);
                        console.log(_this.cart[i].productDP[_this.show_cart[i][1]]);
                        // sum = sum + this.cart[i].productDP[this.show_cart[i][1]];
                        // console.log(sum);
                    });
                    this_1.productQuantityId[i] = this_1.show_cart[i][1];
                    this_1.productQuantity[i] = this_1.show_cart[i][2];
                };
                var this_1 = this;
                for (var i = 0; i < this.show_cart.length; i++) {
                    _loop_1(i);
                }
            }
        }
    };
    BasketPage.prototype.removeProduct = function (productIndex) {
        this.cart.splice(productIndex, 1);
        var temp_cart = JSON.parse(localStorage.getItem("cart"));
        temp_cart.splice(productIndex, 1);
        localStorage.setItem("cart", JSON.stringify(temp_cart));
        this.productQuantityId.splice(productIndex, 1);
        this.productQuantity.splice(productIndex, 1);
        if (temp_cart.length == 0) {
            this.emptyCart = true;
            this.totalProducts = temp_cart.length;
        }
        else
            this.totalProducts = temp_cart.length;
    };
    BasketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-basket',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/basket/basket.html"*/'<ion-header>\n\n  <ion-toolbar>\n    <button class="home-menu" ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-searchbar no-border class="search" [showCancelButton]="shouldShowCancel" (ionCancel)="onCancel($event)"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="account()">\n        <ion-icon name="contact"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf="totalProducts" style="position: fixed;bottom: 55px;left: 0;z-index:999999;width: 100%;background-color: #1a1a1a;padding: 10px;">\n    <ion-row style="height: 25px;color: #fff;">\n      <ion-col col-8>\n        <span *ngIf="totalProducts">{{totalProducts}} <span *ngIf="totalProducts == 1">Item</span><span *ngIf="totalProducts != 1">Items</span></span>\n      </ion-col>\n      <ion-col col-4 style="text-align: right;">\n        <span>CHECKOUT</span>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class="card-background-page" style="padding-bottom: 50px;">\n  \n    <ion-row *ngIf="emptyCart" style="text-align: center;padding-top: 20%;">\n      <ion-col col-12>\n        <h1><ion-icon name="md-cart"></ion-icon></h1>\n        <p style="color: #999;">There are no items in your basket.</p>\n        <p>Enjoy great shopping experience with us!</p>\n        <button ion-button round color="custom" (tap)="goToHome()">Start Shopping</button>\n      </ion-col>\n    </ion-row>\n\n    <ion-card *ngFor="let product of cart;let i=index">\n  \n      <ion-row>\n        <ion-col col-4>\n          <img src="{{product.productImageURL}}">\n        </ion-col>\n        <ion-col col-7>\n          \n          <p style="color: #999">{{product.productCompany}}</p>\n          <h2>{{product.productName}}</h2>\n          <p style="color: #999">{{product.quantity[productQuantityId[i]]}}</p>\n          \n          <ion-row>\n            <ion-col col-8>\n              <h3>\n                Rs {{product.productDP[productQuantityId[i]]}} \n              </h3>\n            </ion-col>\n            <ion-col col-4>\n              <button ion-button color="dark">\n                <ion-icon name="md-remove"></ion-icon>\n                <span style="padding-left: 10px;padding-right: 10px;">{{productQuantity[i]}}</span>\n                <ion-icon name="md-add"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n\n        </ion-col>\n        <ion-col col-1 (tap)="removeProduct(i)">\n          <ion-icon name="md-trash"></ion-icon>\n        </ion-col>\n      </ion-row>\n  \n    </ion-card>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/basket/basket.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _e || Object])
    ], BasketPage);
    return BasketPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=basket.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_products__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(27);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
        this.navCtrl = navCtrl;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.globalService = globalService;
        this.showSubCatBtn = false;
        var loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        loading.present();
        this.categoriesRef = db.list('categories/');
        this.categories = this.categoriesRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
        setTimeout(function () {
            loading.dismiss();
        }, 1000);
    }
    CategoriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    CategoriesPage.prototype.account = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */]);
    };
    CategoriesPage.prototype.showProducts = function (categoryId, category, subcategoryId, subcategory) {
        localStorage.setItem("categoryId", categoryId);
        localStorage.setItem("category", category);
        localStorage.setItem("subcategoryId", subcategoryId);
        localStorage.setItem("subcategory", subcategory);
        this.globalService.showProduct.categoryId = categoryId;
        this.globalService.showProduct.category = category;
        this.globalService.showProduct.subcategoryId = subcategoryId;
        this.globalService.showProduct.subcategory = subcategory;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__products_products__["a" /* ProductsPage */]);
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/categories/categories.html"*/'<ion-header>\n\n  <ion-toolbar>\n    <button class="home-menu" ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-searchbar no-border class="search" [showCancelButton]="shouldShowCancel" (ionCancel)="onCancel($event)"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="account()">\n        <ion-icon name="contact"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="card-background-page">\n    <ion-card>\n      <div class="heading">\n        <h1>\n          <b>Shop by Categories</b>\n        </h1>\n      </div>\n    </ion-card>\n\n    <ion-card *ngFor="let category of categories | async">\n\n      <ion-row>\n        <ion-col col-12>\n          <h2><b>{{category.categoryName}}</b></h2>        \n        </ion-col>\n      </ion-row>\n      \n      <hr>\n\n      <div *ngFor="let subcat of category.subCategories;let i=index">\n        <ion-row (click)="showProducts(category.key,category.categoryName,i,subcat)">\n          <ion-col col-12>\n            <h2>{{subcat}}</h2>\n          </ion-col>\n        </ion-row>\n      </div>\n\n    </ion-card>\n  \n  </div>\n</ion-content>'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/categories/categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account__ = __webpack_require__(45);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductsPage = /** @class */ (function () {
    function ProductsPage(navCtrl, navParams, db, globalService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.globalService = globalService;
        this.toastCtrl = toastCtrl;
        this.product_content = [];
        this.categoryInfo = {};
        this.categoryInfo = this.globalService.showProduct;
        var final_cat_subcat = this.globalService.showProduct.categoryId + "_" + this.globalService.showProduct.subcategoryId;
        this.productsRef = db.list('products/', function (ref) { return ref.orderByChild('category_subcategory').equalTo(final_cat_subcat); });
        this.products = this.productsRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
        this.cartRef = db.list('cart/' + this.globalService.userProfile.userId);
    }
    ProductsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductsPage');
    };
    ProductsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ProductsPage.prototype.quantitySelected = function (i) {
        this.quantityId = i;
    };
    ProductsPage.prototype.addToCart = function (productKey) {
        var _this = this;
        if (this.globalService.userProfile.status == 'true') {
            if (this.quantityId.toString() != '') {
                this.productQuantity = 1;
                this.product_content.push(productKey, this.quantityId, this.productQuantity);
                // this.globalService.cart.push(this.product_content);
                var temp = [];
                if (localStorage.getItem("cart")) {
                    temp = JSON.parse(localStorage.getItem("cart"));
                    temp.push(this.product_content);
                    this.product_content = [];
                    localStorage.removeItem("cart");
                    localStorage.setItem("cart", JSON.stringify(temp));
                    console.log(localStorage.getItem("cart"));
                }
                else {
                    temp.push(this.product_content);
                    this.product_content = [];
                    localStorage.setItem("cart", JSON.stringify(temp));
                    console.log(localStorage.getItem("cart"));
                }
                var toast = this.toastCtrl.create({
                    message: 'Product added to cart.',
                    duration: 1500,
                    position: 'bottom'
                });
                // toast.onDidDismiss(() => {
                // });
                toast.present();
            }
            else {
                var toast = this.toastCtrl.create({
                    message: 'Please select quantity of the product.',
                    duration: 1500,
                    position: 'bottom'
                });
                // toast.onDidDismiss(() => {
                // });
                toast.present();
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Please login to add products to cart.',
                duration: 1500,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__account_account__["a" /* AccountPage */]);
            });
            toast.present();
        }
    };
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/products/products.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button (click)="goBack()" ion-button icon-left clear small><ion-icon name="ios-arrow-back-outline"></ion-icon></button>\n    </ion-buttons>\n    <ion-title><b>{{categoryInfo.subcategory}}</b></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n	<div class="card-background-page">\n		\n		<ion-card *ngFor="let product of products | async">\n	\n			<ion-row>\n				<ion-col col-4>\n					<img src="{{product.productImageURL}}">\n				</ion-col>\n				<ion-col col-8>\n					\n					<p style="color: #999">{{product.productCompany}}</p>\n					<h2>{{product.productName}}</h2>\n					\n					<ion-item color="light">\n					  <ion-label>Quantity</ion-label>\n					  <ion-select>\n					    <ion-option *ngFor="let q of product.quantity;let i =index" [value]="q" (ionSelect)="quantitySelected(i)">\n				    		{{q}}\n				    	</ion-option>\n					  </ion-select>\n					</ion-item>\n					\n					<ion-row>\n						<ion-col col-8>\n							<p style="color: #999">\n								MRP: \n								<span *ngIf="quantityId == \'\'" style="text-decoration: line-through;">\n									Rs {{product.productOP[0]}}\n								</span>\n								<span *ngIf="quantityId != \'\'" style="text-decoration: line-through;">\n									Rs {{product.productOP[quantityId]}}\n								</span>\n							</p>\n							<h3>\n								<b *ngIf="quantityId == \'\'">\n									Rs {{product.productDP[0]}} \n									<span style="color: green;">\n										{{product.productDiscount[0]}}% Off\n									</span>\n								</b>\n								<b *ngIf="quantityId != \'\'">\n									Rs {{product.productDP[quantityId]}} \n									<span style="color: green;">\n										{{product.productDiscount[quantityId]}}% Off\n									</span>\n								</b>\n							</h3>\n						</ion-col>	\n						<ion-col col-4>\n							<button ion-button color="dark" (click)="addToCart(product.key)">ADD</button>\n						</ion-col>\n					</ion-row>\n\n				</ion-col>\n			</ion-row>\n	\n		</ion-card>\n	\n	</div>\n</ion-content>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/products/products.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _e || Object])
    ], ProductsPage);
    return ProductsPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_account__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_shopping_list_create_shopping_list__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UploadPage = /** @class */ (function () {
    function UploadPage(navCtrl, navParams, alertCtrl, camera, globalService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.globalService = globalService;
        this.toastCtrl = toastCtrl;
        this.scannedData = {};
        this.userInfo = {};
        this.userInfo = this.globalService.userProfile;
    }
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
    UploadPage.prototype.uploadShoppingListInfo = function () {
        var alert = this.alertCtrl.create({
            title: 'Upload Shopping List',
            message: 'Like your traditional way of shopping by creating a shopping list? Don\'t worry\, we\'ve got it covered. Just click a photo of your shopping list, and we\'ll deliver all the products to you within 3 Hours! <br> Awesome, right?',
            buttons: [
                {
                    text: 'Awesome!',
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
                    text: 'Awesome!',
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
            selector: 'page-upload',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/upload/upload.html"*/'<ion-header>\n\n  <ion-toolbar>\n    <button class="home-menu" ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-searchbar no-border class="search" [showCancelButton]="shouldShowCancel" (ionCancel)="onCancel($event)"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="account()">\n        <ion-icon name="contact"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="card-background-page">\n    <ion-card>\n      <div class="heading">\n        <div>\n          <h1>\n            <b>Upload Shopping List </b> <span (click)="uploadShoppingListInfo()"><ion-icon name="information-circle"></ion-icon></span>\n          </h1>\n        </div>\n      </div>\n\n      <br>\n\n      <button ion-button full round style="background-color: #1a1a1a;" (click)=takePhoto()>Upload</button>\n      \n    </ion-card>\n\n    <ion-card>\n      <div class="heading">\n        <h1>\n          <b>Create Shopping List </b> <span (click)="createShoppingListInfo()"><ion-icon name="information-circle"></ion-icon></span>\n        </h1>\n      </div>\n      \n      <br>\n\n      <button ion-button full round style="background-color: #1a1a1a;" (click)=goToCreateShoppingListPage()>Create</button>\n\n    </ion-card>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/upload/upload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], UploadPage);
    return UploadPage;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 199:
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
webpackEmptyAsyncContext.id = 199;

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		499,
		11
	],
	"../pages/add-address/add-address.module": [
		500,
		10
	],
	"../pages/add-details/add-details.module": [
		501,
		9
	],
	"../pages/basket/basket.module": [
		502,
		8
	],
	"../pages/categories/categories.module": [
		503,
		7
	],
	"../pages/create-shopping-list/create-shopping-list.module": [
		254
	],
	"../pages/manage-address/manage-address.module": [
		504,
		6
	],
	"../pages/orders/orders.module": [
		505,
		5
	],
	"../pages/product/product.module": [
		506,
		4
	],
	"../pages/products/products.module": [
		507,
		3
	],
	"../pages/search/search.module": [
		508,
		2
	],
	"../pages/startup/startup.module": [
		509,
		1
	],
	"../pages/upload/upload.module": [
		510,
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
webpackAsyncContext.id = 240;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateShoppingListPageModule", function() { return CreateShoppingListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_shopping_list__ = __webpack_require__(255);
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

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateShoppingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_address_add_address__ = __webpack_require__(162);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateShoppingListPage = /** @class */ (function () {
    function CreateShoppingListPage(navCtrl, navParams, db, globalService, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.globalService = globalService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.userInfo = {};
        this.listContent = [];
        this.userInfo = this.globalService.userProfile;
        this.listContent = this.globalService.listContent;
        this.itemsRef = db.list('createShopList/' + this.userInfo.userId + '/');
        this.items = this.itemsRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    }
    CreateShoppingListPage.prototype.addItem = function (itemName) {
        if (itemName.length == 0) {
            var toast = this.toastCtrl.create({
                message: 'Add Item Name.',
                duration: 1000,
                position: 'bottom'
            });
            // toast.onDidDismiss(() => {
            // });  
            toast.present();
        }
        else {
            this.itemsRef.push({ item: itemName });
            this.globalService.listContent.push(itemName);
            console.log(this.globalService.listContent);
            var toast = this.toastCtrl.create({
                message: 'Item added successfully.',
                duration: 1000,
                position: 'bottom'
            });
            // toast.onDidDismiss(() => {
            // });
            toast.present();
        }
    };
    CreateShoppingListPage.prototype.updateItem = function (key, newText) {
        this.itemsRef.update(key, { item: newText });
        var index = this.globalService.listContent.indexOf(newText);
        this.globalService.listContent[index] = newText;
        var toast = this.toastCtrl.create({
            message: 'Item updated successfully.',
            duration: 1000,
            position: 'bottom'
        });
        // toast.onDidDismiss(() => {
        // });
        toast.present();
    };
    CreateShoppingListPage.prototype.deleteItem = function (key, itemName) {
        this.itemsRef.remove(key);
        var index = this.globalService.listContent.indexOf(itemName);
        this.globalService.listContent.splice(index, 1);
        var toast = this.toastCtrl.create({
            message: 'Item removed successfully.',
            duration: 1000,
            position: 'bottom'
        });
        // toast.onDidDismiss(() => {
        // });
        toast.present();
    };
    CreateShoppingListPage.prototype.deleteEverything = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete all the items from this list?',
            buttons: [
                {
                    text: 'No, take me back',
                    role: 'cancel',
                },
                {
                    text: 'Yes',
                    handler: function () {
                        // console.log('Buy clicked');
                        _this.itemsRef.remove();
                        _this.globalService.listContent = [];
                        var toast = _this.toastCtrl.create({
                            message: 'Shopping List cleared successfully.',
                            duration: 1000,
                            position: 'bottom'
                        });
                        // toast.onDidDismiss(() => {
                        // });
                        toast.present();
                    }
                }
            ]
        });
        alert.present();
    };
    CreateShoppingListPage.prototype.confirmList = function () {
        var _this = this;
        if (this.listContent.length == 0) {
            var toast = this.toastCtrl.create({
                message: 'Please add at least one item.',
                duration: 1000,
                position: 'bottom'
            });
            // toast.onDidDismiss(() => {
            // });
            toast.present();
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Confirm Shopping List',
                message: 'Are you sure you want continue your order with this Shopping List?',
                buttons: [
                    {
                        text: 'No, take me back',
                        role: 'cancel',
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__add_address_add_address__["a" /* AddAddressPage */]);
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    CreateShoppingListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateShoppingListPage');
    };
    CreateShoppingListPage.prototype.goToHome = function () {
        this.navCtrl.pop();
    };
    CreateShoppingListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-shopping-list',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/create-shopping-list/create-shopping-list.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button (click)="goToHome()" ion-button icon-left clear small><ion-icon name="ios-arrow-back-outline"></ion-icon></button>\n    </ion-buttons>\n    <ion-title><b>create</b></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-fab right bottom>\n    <button ion-fab color="dark"><ion-icon name="arrow-dropleft"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab color="danger" (click)="deleteEverything()"><ion-icon name="md-trash"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n	<div class="card-background-page">\n    <ion-card>\n      \n      <ion-row *ngFor="let item of items | async">\n      \n        <ion-col col-8>\n            <input type="text" #updatetext [value]="item.item"><br><br>\n        </ion-col>\n\n        <ion-col col-2>\n          <button ion-button full style="background-color: #1a1a1a;" (click)="updateItem(item.key,updatetext.value)"><ion-icon name="md-refresh-circle"></ion-icon></button>\n        </ion-col>\n\n        <ion-col col-2>\n          <button ion-button full style="background-color: #1a1a1a;" (click)="deleteItem(item.key,item.item)"><ion-icon name="md-trash"></ion-icon></button>          \n        </ion-col>\n\n      <hr>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col col-10>\n          <input type="text" #itemName placeholder="Add Item Name & its information" onfocus="this.value=\'\'"/>\n        </ion-col>\n        <ion-col col-2>\n          <button ion-button full round style="background-color: #1a1a1a;" (click)="addItem(itemName.value)"><ion-icon name="md-add"></ion-icon></button>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row *ngIf="items">\n        <ion-col col-12>\n          <hr>\n          <button ion-button full round color="dark" (click)="confirmList()">Confirm List</button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/create-shopping-list/create-shopping-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], CreateShoppingListPage);
    return CreateShoppingListPage;
}());

//# sourceMappingURL=create-shopping-list.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_account__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(16);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
    function HomePage(navCtrl, db, toastCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.quantityId = '';
        this.productQuantity = '';
        this.productsRef = db.list('products/');
        this.products = this.productsRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    }
    HomePage.prototype.account = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__account_account__["a" /* AccountPage */]);
    };
    HomePage.prototype.quantitySelected = function (i) {
        this.quantityId = i;
    };
    HomePage.prototype.addToCart = function (productKey) {
        if (this.quantityId.toString() != '') {
            this.productQuantity = "1";
            // this.cartRef.push({
            //   productKey      : productKey,
            //   quantityId      : this.quantityId,
            //   productQuantity : this.productQuantity
            // });
            var toast = this.toastCtrl.create({
                message: 'Product added to cart.',
                duration: 1500,
                position: 'bottom'
            });
            // toast.onDidDismiss(() => {
            // });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Please select quantity of the product.',
                duration: 1500,
                position: 'bottom'
            });
            // toast.onDidDismiss(() => {
            // });
            toast.present();
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-toolbar>\n    <button class="home-menu" ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-searchbar no-border class="search" [showCancelButton]="shouldShowCancel" (ionCancel)="onCancel($event)"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="account()">\n        <ion-icon name="contact"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="card-background-page">  \n\n    <!-- <div class="card" *ngFor="let product of products | async">\n  \n      <ion-row>\n        <ion-col col-4>\n          <img src="{{product.productImageURL}}">\n        </ion-col>\n        <ion-col col-8>\n          \n          <p style="color: #999">{{product.productCompany}}</p>\n          <h2>{{product.productName}}</h2>\n          \n          <ion-item color="light">\n            <ion-label>Quantity</ion-label>\n            <ion-select style="height: 20px;">\n              <ion-option *ngFor="let q of product.quantity;let i =index" [value]="q" (ionSelect)="quantitySelected(i)">\n                {{q}}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n          \n          <ion-row>\n            <ion-col col-8>\n              <p style="color: #999">\n                MRP: \n                <span *ngIf="quantityId == \'\'" style="text-decoration: line-through;">\n                  Rs {{product.productOP[0]}}\n                </span>\n                <span *ngIf="quantityId != \'\'" style="text-decoration: line-through;">\n                  Rs {{product.productOP[quantityId]}}\n                </span>\n              </p>\n              <h3>\n                <b *ngIf="quantityId == \'\'">\n                  Rs {{product.productDP[0]}} \n                  <span style="color: green;">\n                    {{product.productDiscount[0]}}% Off\n                  </span>\n                </b>\n                <b *ngIf="quantityId != \'\'">\n                  Rs {{product.productDP[quantityId]}} \n                  <span style="color: green;">\n                    {{product.productDiscount[quantityId]}}% Off\n                  </span>\n                </b>\n              </h3>\n            </ion-col>  \n            <ion-col col-4>\n              <button ion-button color="dark" (click)="addToCart(product.key)">ADD</button>\n            </ion-col>\n          </ion-row>\n\n        </ion-col>\n      </ion-row>\n      <hr>\n  \n    </div> -->\n    \n    <ion-card>\n      <div id="card-text" style="text-align: center;">\n        <h1>Welcome to <b style="font-family: \'Dancing Script\', sans-serif;color: #F25632;">the banya</b></h1>\n        <h3>Delivering 15000+ Products with Assured Lowest Price</h3>\n      </div>\n    </ion-card>\n\n    <ion-card>\n      <img src="../../assets/imgs/bg-1.jpg" />\n    </ion-card>\n\n    <ion-card>\n      <img src="../../assets/imgs/bg-2.jpg" />\n    </ion-card>\n\n    <ion-card>\n      <img src="../../assets/imgs/bg-3.jpg" />\n    </ion-card>\n\n    <ion-card>\n      <img src="../../assets/imgs/bg-4.jpg" />\n    </ion-card>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 27:
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
            userEmail: localStorage.getItem("userEmail"),
            userAddress: localStorage.getItem("userAddress")
        };
        this.listContent = [];
        this.createShopListOrders = {
            selectedAddress: localStorage.getItem("selectedAddress")
        };
        this.showProduct = {
            categoryId: localStorage.getItem("categoryId"),
            category: localStorage.getItem("category"),
            subcategoryId: localStorage.getItem("subcategoryId"),
            subcategory: localStorage.getItem("subcategory")
        };
        this.cart = [[]];
    }
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
            selector: 'page-product',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/product/product.html"*/'<!--\n  Generated template for the ProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>product</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/product/product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
            selector: 'page-search',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar>\n    <button start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="md-menu"></ion-icon>\n      </button>\n    </button>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="account()">\n        <ion-icon name="contact"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      <b>search</b>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(137);
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
            selector: 'page-startup',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/startup/startup.html"*/'<ion-content padding id="startup">\n	<!-- <h1><b>the banya</b></h1>\n	<h3><b>ghar ki dukaan</b></h3> -->\n	<br><br><br>\n	<img src="../../assets/imgs/logo.png" alt="main-logo" class="img-centered"><br><br><br><br><br>\n	<button ion-button full id="get-started" (click)="getstarted()">Get Started</button>\n</ion-content>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/startup/startup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], StartupPage);
    return StartupPage;
}());

//# sourceMappingURL=startup.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(425);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_categories_categories__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_search__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_basket_basket__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_account_account__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_startup_startup__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_upload_upload__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_details_add_details__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_product_product__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_create_shopping_list_create_shopping_list_module__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_add_address_add_address__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_manage_address_manage_address__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_orders_orders__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_products_products__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2_auth__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_global_global__ = __webpack_require__(27);
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
                __WEBPACK_IMPORTED_MODULE_13__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_add_address_add_address__["a" /* AddAddressPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_manage_address_manage_address__["a" /* ManageAddressPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_products_products__["a" /* ProductsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_23_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAuth),
                __WEBPACK_IMPORTED_MODULE_25_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__["b" /* AngularFireDatabaseModule */],
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
                        { loadChildren: '../pages/add-address/add-address.module#AddAddressPageModule', name: 'AddAddressPage', segment: 'add-address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-details/add-details.module#AddDetailsPageModule', name: 'AddDetailsPage', segment: 'add-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/basket/basket.module#BasketPageModule', name: 'BasketPage', segment: 'basket', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-shopping-list/create-shopping-list.module#CreateShoppingListPageModule', name: 'CreateShoppingListPage', segment: 'create-shopping-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/manage-address/manage-address.module#ManageAddressPageModule', name: 'ManageAddressPage', segment: 'manage-address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/product.module#ProductPageModule', name: 'ProductPage', segment: 'product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/startup/startup.module#StartupPageModule', name: 'StartupPage', segment: 'startup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upload/upload.module#UploadPageModule', name: 'UploadPage', segment: 'upload', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_13__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_add_address_add_address__["a" /* AddAddressPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_manage_address_manage_address__["a" /* ManageAddressPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_products_products__["a" /* ProductsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_26__providers_global_global__["a" /* GlobalProvider */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_details_add_details__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manage_address_manage_address__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__orders_orders__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_global__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(252);
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
    function AccountPage(navCtrl, navParams, toastCtrl, fire, db, globalService, geo, platform, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.fire = fire;
        this.db = db;
        this.globalService = globalService;
        this.geo = geo;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.userInfo = {};
        this.loginOption = true;
        this.registerOption = false;
        this.userInfo = this.globalService.userProfile;
    }
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
    AccountPage.prototype.manageAddress = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__manage_address_manage_address__["a" /* ManageAddressPage */]);
    };
    AccountPage.prototype.ordersPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__orders_orders__["a" /* OrdersPage */]);
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
                    localStorage.setItem("status", "true");
                    localStorage.setItem("userId", user.uid);
                    localStorage.setItem("userEmail", user.email);
                    _this.globalService.userProfile.status = "true";
                    _this.globalService.userProfile.userId = user.uid;
                    _this.globalService.userProfile.userEmail = user.email;
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
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_details_add_details__["a" /* AddDetailsPage */]);
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
        this.navCtrl.pop();
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
            _this.globalService.createShopListOrders.selectedAddress = '';
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
            selector: 'page-account',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/account/account.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button (click)="goToHome()" ion-button icon-left clear small><ion-icon name="ios-arrow-back-outline"></ion-icon></button>\n    </ion-buttons>\n    <ion-title *ngIf="this.fire.auth.currentUser">\n      <b>my account</b>\n    </ion-title>\n\n    <ion-title *ngIf="!this.fire.auth.currentUser">\n      <b>account</b>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content *ngIf="this.fire.auth.currentUser">\n    <!-- If User Is Logged In -->\n\n    <div class="profile-page">\n      <h2>{{userInfo.userName}}</h2><hr>\n      <h3>{{userInfo.userEmail}}</h3>\n      <h3>+91 {{userInfo.userNumber}}</h3> \n      <!-- <h3>Current Location: {{lat}} | {{lng}}</h3> -->\n    </div>\n\n    <div class="box">\n      \n      <ion-row (click)="manageAddress()">\n        <ion-col col-2>\n          <h2><ion-icon name="md-home"></ion-icon></h2>\n        </ion-col>\n\n        <ion-col col-10>\n          <h2>Manage Address</h2>\n        </ion-col>\n      \n      </ion-row>\n      <hr>\n      \n      <ion-row>\n        <ion-col col-2>\n          <h2><ion-icon name="md-create"></ion-icon></h2>\n        </ion-col>\n\n        <ion-col col-10>\n          <h2>Edit Profile</h2>\n        </ion-col>\n      </ion-row>\n      <hr>\n      \n      <ion-row (click)=ordersPage()>\n      \n        <ion-col col-2>\n          <h2><ion-icon name="md-timer"></ion-icon></h2>\n        </ion-col>\n\n        <ion-col col-10>\n          <h2>Orders</h2>\n        </ion-col>\n      \n      </ion-row>\n      <hr>\n      <ion-row>\n      \n        <ion-col col-2>\n          <h2><ion-icon name="md-lock"></ion-icon></h2>\n        </ion-col>\n\n        <ion-col col-10>\n          <h2>Change Password</h2>\n        </ion-col>\n      \n      </ion-row>\n      <hr>\n      <ion-row (click)="logout()">\n      \n        <ion-col col-2>\n          <h2><ion-icon name="md-log-out"></ion-icon></h2>\n        </ion-col>\n\n        <ion-col col-10>\n          <h2>Logout</h2>\n        </ion-col>\n      \n      </ion-row>\n\n      <br><br><br>\n\n    </div>\n\n\n</ion-content>  \n\n<ion-content padding *ngIf="!this.fire.auth.currentUser">\n    \n    <div class="box">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <button ion-button full style="background-color: #1a1a1a;" (click)="goToLogin()">LOGIN</button>\n          </ion-col>\n          <ion-col col-6>\n            <button ion-button full style="background-color: #1a1a1a;" (click)="goToRegister()">REGISTER</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </div>\n\n    <br>\n\n    <div class="box" *ngIf="loginOption">\n      <h1 style="text-align: center;"><b>Login</b></h1>\n      <ion-item>\n        <ion-label color="dark" floating>Email</ion-label>\n        <ion-input type="email" clearInput #email></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="dark" floating>Password</ion-label>\n        <ion-input type="password" clearInpu #password></ion-input>\n      </ion-item><br>\n      <button ion-button class="btn-custom-1" (click)="login()">GO!</button><br><br>\n    </div>\n\n    <div class="box" *ngIf="registerOption">\n      <h1 style="text-align: center;"><b>Register</b></h1>\n    \n      <ion-item>\n        <ion-label color="dark" floating>Email</ion-label>\n        <ion-input type="email" clearInput #userEmail></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label color="dark" floating>Password</ion-label>\n        <ion-input type="password" clearInput #userPassword></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="dark" floating>Confirm Password</ion-label>\n        <ion-input type="password" clearInput #userConfirmPassword></ion-input>\n      </ion-item><br><br>\n    \n      <button ion-button class="btn-custom-1" (click)="register()">GO!</button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_7__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(137);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/app/app.html"*/'<ion-menu type="overlay" [content]="content">\n    <ion-header id="menu-header">\n        <h2><b>the banya</b></h2>\n    </ion-header>\n    <ion-content padding>\n        <ion-list id="menu-list">\n            <li>\n               Smart Shopping List\n            </li>\n            <li>\n               Offers\n            </li>\n            <li>\n                Customer Service\n            </li>\n            <li>\n               About\n            </li>\n            <li>\n               Contact\n            </li>\n            <li>\n               FAQs\n            </li>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content></ion-nav>'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/banya/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[302]);
//# sourceMappingURL=main.js.map