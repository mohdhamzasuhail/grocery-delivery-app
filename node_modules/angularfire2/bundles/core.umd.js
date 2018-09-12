(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('firebase/app')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators', 'firebase/app'], factory) :
    (factory((global.angularfire2 = global.angularfire2 || {}),global.ng.core,global.ng.common,global.rxjs,global.rxjs.operators,global.firebase));
}(this, (function (exports,_angular_core,_angular_common,rxjs,rxjs_operators,firebase) { 'use strict';

var RealtimeDatabaseURL = new _angular_core.InjectionToken('angularfire2.realtimeDatabaseURL');
var FirebaseZoneScheduler = (function () {
    function FirebaseZoneScheduler(zone, platformId) {
        this.zone = zone;
        this.platformId = platformId;
    }
    FirebaseZoneScheduler.prototype.schedule = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.zone.runGuarded(function () { return rxjs.queueScheduler.schedule.apply(rxjs.queueScheduler, args); });
    };
    FirebaseZoneScheduler.prototype.keepUnstableUntilFirst = function (obs$) {
        var _this = this;
        if (_angular_common.isPlatformServer(this.platformId)) {
            return new rxjs.Observable(function (subscriber) {
                var noop = function () { };
                var task = Zone.current.scheduleMacroTask('firebaseZoneBlock', noop, {}, noop, noop);
                obs$.pipe(rxjs_operators.first()).subscribe(function () { return _this.zone.runOutsideAngular(function () { return task.invoke(); }); });
                return obs$.subscribe(subscriber);
            });
        }
        else {
            return obs$;
        }
    };
    FirebaseZoneScheduler.prototype.runOutsideAngular = function (obs$) {
        var _this = this;
        return new rxjs.Observable(function (subscriber) {
            return _this.zone.runOutsideAngular(function () {
                return obs$.subscribe(function (value) { return _this.zone.run(function () { return subscriber.next(value); }); }, function (error) { return _this.zone.run(function () { return subscriber.error(error); }); }, function () { return _this.zone.run(function () { return subscriber.complete(); }); });
            });
        });
    };
    return FirebaseZoneScheduler;
}());

var FirebaseOptionsToken = new _angular_core.InjectionToken('angularfire2.app.options');
var FirebaseNameOrConfigToken = new _angular_core.InjectionToken('angularfire2.app.nameOrConfig');
var FirebaseApp = (function () {
    function FirebaseApp() {
    }
    return FirebaseApp;
}());
function _firebaseAppFactory(options, nameOrConfig) {
    var name = typeof nameOrConfig === 'string' && nameOrConfig || '[DEFAULT]';
    var config = typeof nameOrConfig === 'object' && nameOrConfig || {};
    config.name = config.name || name;
    var existingApp = firebase.apps.filter(function (app) { return app && app.name === config.name; })[0];
    return (existingApp || firebase.initializeApp(options, config));
}
var FirebaseAppProvider = {
    provide: FirebaseApp,
    useFactory: _firebaseAppFactory,
    deps: [
        FirebaseOptionsToken,
        [new _angular_core.Optional(), FirebaseNameOrConfigToken]
    ]
};
var AngularFireModule = (function () {
    function AngularFireModule() {
    }
    AngularFireModule.initializeApp = function (options, nameOrConfig) {
        return {
            ngModule: AngularFireModule,
            providers: [
                { provide: FirebaseOptionsToken, useValue: options },
                { provide: FirebaseNameOrConfigToken, useValue: nameOrConfig }
            ]
        };
    };
    AngularFireModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    providers: [FirebaseAppProvider],
                },] },
    ];
    return AngularFireModule;
}());

exports.RealtimeDatabaseURL = RealtimeDatabaseURL;
exports.FirebaseZoneScheduler = FirebaseZoneScheduler;
exports.FirebaseOptionsToken = FirebaseOptionsToken;
exports.FirebaseNameOrConfigToken = FirebaseNameOrConfigToken;
exports.FirebaseApp = FirebaseApp;
exports._firebaseAppFactory = _firebaseAppFactory;
exports.AngularFireModule = AngularFireModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
