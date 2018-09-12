(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('angularfire2'), require('firebase/auth')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs', 'rxjs/operators', 'angularfire2', 'firebase/auth'], factory) :
    (factory((global.angularfire2 = global.angularfire2 || {}, global.angularfire2.auth = global.angularfire2.auth || {}),global.ng.core,global.rxjs,global.rxjs.operators,global.angularfire2,global.firebase));
}(this, (function (exports,_angular_core,rxjs,rxjs_operators,angularfire2,firebase_auth) { 'use strict';

var AngularFireAuth = (function () {
    function AngularFireAuth(options, nameOrConfig, platformId, zone) {
        var _this = this;
        this.zone = zone;
        var scheduler = new angularfire2.FirebaseZoneScheduler(zone, platformId);
        this.auth = zone.runOutsideAngular(function () {
            var app = angularfire2._firebaseAppFactory(options, nameOrConfig);
            return app.auth();
        });
        this.authState = scheduler.keepUnstableUntilFirst(scheduler.runOutsideAngular(new rxjs.Observable(function (subscriber) {
            var unsubscribe = _this.auth.onAuthStateChanged(subscriber);
            return { unsubscribe: unsubscribe };
        })));
        this.user = scheduler.keepUnstableUntilFirst(scheduler.runOutsideAngular(new rxjs.Observable(function (subscriber) {
            var unsubscribe = _this.auth.onIdTokenChanged(subscriber);
            return { unsubscribe: unsubscribe };
        })));
        this.idToken = this.user.pipe(rxjs_operators.switchMap(function (user) {
            return user ? rxjs.from(user.getIdToken()) : rxjs.of(null);
        }));
        this.idTokenResult = this.user.pipe(rxjs_operators.switchMap(function (user) {
            return user ? rxjs.from(user.getIdTokenResult()) : rxjs.of(null);
        }));
    }
    AngularFireAuth.decorators = [
        { type: _angular_core.Injectable },
    ];
    AngularFireAuth.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [angularfire2.FirebaseOptionsToken,] }] },
        { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [angularfire2.FirebaseNameOrConfigToken,] }] },
        { type: Object, decorators: [{ type: _angular_core.Inject, args: [_angular_core.PLATFORM_ID,] }] },
        { type: _angular_core.NgZone }
    ]; };
    return AngularFireAuth;
}());

var AngularFireAuthModule = (function () {
    function AngularFireAuthModule() {
    }
    AngularFireAuthModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    providers: [AngularFireAuth]
                },] },
    ];
    return AngularFireAuthModule;
}());

exports.AngularFireAuth = AngularFireAuth;
exports.AngularFireAuthModule = AngularFireAuthModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
