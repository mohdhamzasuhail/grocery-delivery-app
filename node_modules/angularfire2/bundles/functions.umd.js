(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('angularfire2'), require('firebase/functions')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs', 'rxjs/operators', 'angularfire2', 'firebase/functions'], factory) :
    (factory((global.angularfire2 = global.angularfire2 || {}, global.angularfire2.functions = global.angularfire2.functions || {}),global.ng.core,global.rxjs,global.rxjs.operators,global.angularfire2,global.firebase));
}(this, (function (exports,_angular_core,rxjs,rxjs_operators,angularfire2,firebase_functions) { 'use strict';

var AngularFireFunctions = (function () {
    function AngularFireFunctions(options, nameOrConfig, platformId, zone) {
        this.scheduler = new angularfire2.FirebaseZoneScheduler(zone, platformId);
        this.functions = zone.runOutsideAngular(function () {
            var app = angularfire2._firebaseAppFactory(options, nameOrConfig);
            return app.functions();
        });
    }
    AngularFireFunctions.prototype.httpsCallable = function (name) {
        var _this = this;
        var callable = this.functions.httpsCallable(name);
        return function (data) {
            var callable$ = rxjs.from(callable(data));
            return _this.scheduler.runOutsideAngular(callable$.pipe(rxjs_operators.map(function (r) { return r.data; })));
        };
    };
    AngularFireFunctions.decorators = [
        { type: _angular_core.Injectable },
    ];
    AngularFireFunctions.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [angularfire2.FirebaseOptionsToken,] }] },
        { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [angularfire2.FirebaseNameOrConfigToken,] }] },
        { type: Object, decorators: [{ type: _angular_core.Inject, args: [_angular_core.PLATFORM_ID,] }] },
        { type: _angular_core.NgZone }
    ]; };
    return AngularFireFunctions;
}());

var AngularFireFunctionsModule = (function () {
    function AngularFireFunctionsModule() {
    }
    AngularFireFunctionsModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    providers: [AngularFireFunctions]
                },] },
    ];
    return AngularFireFunctionsModule;
}());

exports.AngularFireFunctions = AngularFireFunctions;
exports.AngularFireFunctionsModule = AngularFireFunctionsModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
