(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('angularfire2'), require('firebase/firestore')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs', 'rxjs/operators', 'angularfire2', 'firebase/firestore'], factory) :
    (factory((global.angularfire2 = global.angularfire2 || {}, global.angularfire2.firestore = global.angularfire2.firestore || {}),global.ng.core,global.rxjs,global.rxjs.operators,global.angularfire2,global.firebase));
}(this, (function (exports,_angular_core,rxjs,rxjs_operators,angularfire2,firebase_firestore) { 'use strict';

function _fromRef(ref) {
    return new rxjs.Observable(function (subscriber) {
        var unsubscribe = ref.onSnapshot(subscriber);
        return { unsubscribe: unsubscribe };
    });
}
function fromRef(ref) {
    return _fromRef(ref).pipe(rxjs_operators.share());
}
function fromDocRef(ref) {
    return fromRef(ref)
        .pipe(rxjs_operators.map(function (payload) { return ({ payload: payload, type: 'value' }); }));
}
function fromCollectionRef(ref) {
    return fromRef(ref).pipe(rxjs_operators.map(function (payload) { return ({ payload: payload, type: 'query' }); }));
}

function docChanges(query) {
    return fromCollectionRef(query)
        .pipe(rxjs_operators.map(function (action) {
        return action.payload.docChanges()
            .map(function (change) { return ({ type: change.type, payload: change }); });
    }));
}
function sortedChanges(query, events) {
    return fromCollectionRef(query)
        .pipe(rxjs_operators.map(function (changes) { return changes.payload.docChanges(); }), rxjs_operators.scan(function (current, changes) { return combineChanges(current, changes, events); }, []), rxjs_operators.map(function (changes) { return changes.map(function (c) { return ({ type: c.type, payload: c }); }); }));
}
function combineChanges(current, changes, events) {
    changes.forEach(function (change) {
        if (events.indexOf(change.type) > -1) {
            current = combineChange(current, change);
        }
    });
    return current;
}
function combineChange(combined, change) {
    switch (change.type) {
        case 'added':
            if (combined[change.newIndex] && combined[change.newIndex].doc.id == change.doc.id) {
            }
            else {
                combined.splice(change.newIndex, 0, change);
            }
            break;
        case 'modified':
            if (change.oldIndex !== change.newIndex) {
                combined.splice(change.oldIndex, 1);
                combined.splice(change.newIndex, 0, change);
            }
            else {
                combined.splice(change.newIndex, 1, change);
            }
            break;
        case 'removed':
            combined.splice(change.oldIndex, 1);
            break;
    }
    return combined;
}

function validateEventsArray(events) {
    if (!events || events.length === 0) {
        events = ['added', 'removed', 'modified'];
    }
    return events;
}
var AngularFirestoreCollection = (function () {
    function AngularFirestoreCollection(ref, query, afs) {
        this.ref = ref;
        this.query = query;
        this.afs = afs;
    }
    AngularFirestoreCollection.prototype.stateChanges = function (events) {
        if (!events || events.length === 0) {
            return this.afs.scheduler.keepUnstableUntilFirst(this.afs.scheduler.runOutsideAngular(docChanges(this.query)));
        }
        return this.afs.scheduler.keepUnstableUntilFirst(this.afs.scheduler.runOutsideAngular(docChanges(this.query)))
            .pipe(rxjs_operators.map(function (actions) { return actions.filter(function (change) { return events.indexOf(change.type) > -1; }); }), rxjs_operators.filter(function (changes) { return changes.length > 0; }));
    };
    AngularFirestoreCollection.prototype.auditTrail = function (events) {
        return this.stateChanges(events).pipe(rxjs_operators.scan(function (current, action) { return current.concat(action); }, []));
    };
    AngularFirestoreCollection.prototype.snapshotChanges = function (events) {
        var validatedEvents = validateEventsArray(events);
        var sortedChanges$ = sortedChanges(this.query, validatedEvents);
        var scheduledSortedChanges$ = this.afs.scheduler.runOutsideAngular(sortedChanges$);
        return this.afs.scheduler.keepUnstableUntilFirst(scheduledSortedChanges$);
    };
    AngularFirestoreCollection.prototype.valueChanges = function () {
        var fromCollectionRef$ = fromCollectionRef(this.query);
        var scheduled$ = this.afs.scheduler.runOutsideAngular(fromCollectionRef$);
        return this.afs.scheduler.keepUnstableUntilFirst(scheduled$)
            .pipe(rxjs_operators.map(function (actions) { return actions.payload.docs.map(function (a) { return a.data(); }); }));
    };
    AngularFirestoreCollection.prototype.add = function (data) {
        return this.ref.add(data);
    };
    AngularFirestoreCollection.prototype.doc = function (path) {
        return new AngularFirestoreDocument(this.ref.doc(path), this.afs);
    };
    return AngularFirestoreCollection;
}());

var AngularFirestoreDocument = (function () {
    function AngularFirestoreDocument(ref, afs) {
        this.ref = ref;
        this.afs = afs;
    }
    AngularFirestoreDocument.prototype.set = function (data, options) {
        return this.ref.set(data, options);
    };
    AngularFirestoreDocument.prototype.update = function (data) {
        return this.ref.update(data);
    };
    AngularFirestoreDocument.prototype.delete = function () {
        return this.ref.delete();
    };
    AngularFirestoreDocument.prototype.collection = function (path, queryFn) {
        var collectionRef = this.ref.collection(path);
        var _a = associateQuery(collectionRef, queryFn), ref = _a.ref, query = _a.query;
        return new AngularFirestoreCollection(ref, query, this.afs);
    };
    AngularFirestoreDocument.prototype.snapshotChanges = function () {
        var fromDocRef$ = fromDocRef(this.ref);
        var scheduledFromDocRef$ = this.afs.scheduler.runOutsideAngular(fromDocRef$);
        return this.afs.scheduler.keepUnstableUntilFirst(scheduledFromDocRef$);
    };
    AngularFirestoreDocument.prototype.valueChanges = function () {
        return this.snapshotChanges().pipe(rxjs_operators.map(function (action) {
            return action.payload.data();
        }));
    };
    return AngularFirestoreDocument;
}());

var EnablePersistenceToken = new _angular_core.InjectionToken('angularfire2.enableFirestorePersistence');
var FirestoreSettingsToken = new _angular_core.InjectionToken('angularfire2.firestore.settings');
var DefaultFirestoreSettings = { timestampsInSnapshots: true };
function associateQuery(collectionRef, queryFn) {
    if (queryFn === void 0) { queryFn = function (ref) { return ref; }; }
    var query = queryFn(collectionRef);
    var ref = collectionRef;
    return { query: query, ref: ref };
}
var AngularFirestore = (function () {
    function AngularFirestore(options, nameOrConfig, shouldEnablePersistence, settings, platformId, zone) {
        var _this = this;
        this.scheduler = new angularfire2.FirebaseZoneScheduler(zone, platformId);
        this.firestore = zone.runOutsideAngular(function () {
            var app = angularfire2._firebaseAppFactory(options, nameOrConfig);
            var firestore = app.firestore();
            firestore.settings(settings || DefaultFirestoreSettings);
            return firestore;
        });
        this.persistenceEnabled$ = zone.runOutsideAngular(function () {
            return shouldEnablePersistence ? rxjs.from(_this.firestore.enablePersistence().then(function () { return true; }, function () { return false; }))
                : rxjs.of(false);
        })
            .pipe(rxjs_operators.catchError(function () { return rxjs.of(false); }));
    }
    AngularFirestore.prototype.collection = function (pathOrRef, queryFn) {
        var collectionRef;
        if (typeof pathOrRef === 'string') {
            collectionRef = this.firestore.collection(pathOrRef);
        }
        else {
            collectionRef = pathOrRef;
        }
        var _a = associateQuery(collectionRef, queryFn), ref = _a.ref, query = _a.query;
        return new AngularFirestoreCollection(ref, query, this);
    };
    AngularFirestore.prototype.doc = function (pathOrRef) {
        var ref;
        if (typeof pathOrRef === 'string') {
            ref = this.firestore.doc(pathOrRef);
        }
        else {
            ref = pathOrRef;
        }
        return new AngularFirestoreDocument(ref, this);
    };
    AngularFirestore.prototype.createId = function () {
        return this.firestore.collection('_').doc().id;
    };
    AngularFirestore.decorators = [
        { type: _angular_core.Injectable },
    ];
    AngularFirestore.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [angularfire2.FirebaseOptionsToken,] }] },
        { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [angularfire2.FirebaseNameOrConfigToken,] }] },
        { type: Boolean, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [EnablePersistenceToken,] }] },
        { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [FirestoreSettingsToken,] }] },
        { type: Object, decorators: [{ type: _angular_core.Inject, args: [_angular_core.PLATFORM_ID,] }] },
        { type: _angular_core.NgZone }
    ]; };
    return AngularFirestore;
}());

var AngularFirestoreModule = (function () {
    function AngularFirestoreModule() {
    }
    AngularFirestoreModule.enablePersistence = function () {
        return {
            ngModule: AngularFirestoreModule,
            providers: [
                { provide: EnablePersistenceToken, useValue: true },
            ]
        };
    };
    AngularFirestoreModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    providers: [AngularFirestore]
                },] },
    ];
    return AngularFirestoreModule;
}());

exports.EnablePersistenceToken = EnablePersistenceToken;
exports.FirestoreSettingsToken = FirestoreSettingsToken;
exports.DefaultFirestoreSettings = DefaultFirestoreSettings;
exports.associateQuery = associateQuery;
exports.AngularFirestore = AngularFirestore;
exports.AngularFirestoreModule = AngularFirestoreModule;
exports.validateEventsArray = validateEventsArray;
exports.AngularFirestoreCollection = AngularFirestoreCollection;
exports.AngularFirestoreDocument = AngularFirestoreDocument;
exports.docChanges = docChanges;
exports.sortedChanges = sortedChanges;
exports.combineChanges = combineChanges;
exports.combineChange = combineChange;
exports.fromRef = fromRef;
exports.fromDocRef = fromDocRef;
exports.fromCollectionRef = fromCollectionRef;

Object.defineProperty(exports, '__esModule', { value: true });

})));
