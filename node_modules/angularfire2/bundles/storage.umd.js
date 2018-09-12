(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('angularfire2'), require('firebase/storage')) :
    typeof define === 'function' && define.amd ? define(['exports', 'rxjs', 'rxjs/operators', '@angular/core', 'angularfire2', 'firebase/storage'], factory) :
    (factory((global.angularfire2 = global.angularfire2 || {}, global.angularfire2.storage = global.angularfire2.storage || {}),global.rxjs,global.rxjs.operators,global.ng.core,global.angularfire2,global.firebase));
}(this, (function (exports,rxjs,rxjs_operators,_angular_core,angularfire2,firebase_storage) { 'use strict';

function fromTask(task) {
    return new rxjs.Observable(function (subscriber) {
        var progress = function (snap) { return subscriber.next(snap); };
        var error = function (e) { return subscriber.error(e); };
        var complete = function () { return subscriber.complete(); };
        task.on('state_changed', progress, error, complete);
        return function () { return task.cancel(); };
    });
}

function createUploadTask(task) {
    var inner$ = fromTask(task);
    return {
        task: task,
        then: task.then.bind(task),
        catch: task.catch.bind(task),
        pause: task.pause.bind(task),
        cancel: task.cancel.bind(task),
        resume: task.resume.bind(task),
        snapshotChanges: function () { return inner$; },
        percentageChanges: function () { return inner$.pipe(rxjs_operators.map(function (s) { return s.bytesTransferred / s.totalBytes * 100; })); }
    };
}

function createStorageRef(ref, scheduler) {
    return {
        getDownloadURL: function () { return scheduler.keepUnstableUntilFirst(scheduler.runOutsideAngular(rxjs.from(ref.getDownloadURL()))); },
        getMetadata: function () { return scheduler.keepUnstableUntilFirst(scheduler.runOutsideAngular(rxjs.from(ref.getMetadata()))); },
        delete: function () { return rxjs.from(ref.delete()); },
        child: function (path) { return createStorageRef(ref.child(path), scheduler); },
        updateMetatdata: function (meta) { return rxjs.from(ref.updateMetadata(meta)); },
        put: function (data, metadata) {
            var task = ref.put(data, metadata);
            return createUploadTask(task);
        },
        putString: function (data, format, metadata) {
            var task = ref.putString(data, format, metadata);
            return createUploadTask(task);
        }
    };
}

var StorageBucket = new _angular_core.InjectionToken('angularfire2.storageBucket');
var AngularFireStorage = (function () {
    function AngularFireStorage(options, nameOrConfig, storageBucket, platformId, zone) {
        this.scheduler = new angularfire2.FirebaseZoneScheduler(zone, platformId);
        this.storage = zone.runOutsideAngular(function () {
            var app = angularfire2._firebaseAppFactory(options, nameOrConfig);
            return app.storage(storageBucket || undefined);
        });
    }
    AngularFireStorage.prototype.ref = function (path) {
        return createStorageRef(this.storage.ref(path), this.scheduler);
    };
    AngularFireStorage.prototype.upload = function (path, data, metadata) {
        var storageRef = this.storage.ref(path);
        var ref = createStorageRef(storageRef, this.scheduler);
        return ref.put(data, metadata);
    };
    AngularFireStorage.decorators = [
        { type: _angular_core.Injectable },
    ];
    AngularFireStorage.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [angularfire2.FirebaseOptionsToken,] }] },
        { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [angularfire2.FirebaseNameOrConfigToken,] }] },
        { type: String, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [StorageBucket,] }] },
        { type: Object, decorators: [{ type: _angular_core.Inject, args: [_angular_core.PLATFORM_ID,] }] },
        { type: _angular_core.NgZone }
    ]; };
    return AngularFireStorage;
}());

var AngularFireStorageModule = (function () {
    function AngularFireStorageModule() {
    }
    AngularFireStorageModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    providers: [AngularFireStorage]
                },] },
    ];
    return AngularFireStorageModule;
}());

exports.createStorageRef = createStorageRef;
exports.StorageBucket = StorageBucket;
exports.AngularFireStorage = AngularFireStorage;
exports.createUploadTask = createUploadTask;
exports.fromTask = fromTask;
exports.AngularFireStorageModule = AngularFireStorageModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
