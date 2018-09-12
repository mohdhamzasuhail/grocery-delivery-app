(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('angularfire2'), require('firebase/database')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs', 'rxjs/operators', 'angularfire2', 'firebase/database'], factory) :
    (factory((global.angularfire2 = global.angularfire2 || {}, global.angularfire2.database = global.angularfire2.database || {}),global.ng.core,global.rxjs,global.rxjs.operators,global.angularfire2,global.firebase));
}(this, (function (exports,_angular_core,rxjs,rxjs_operators,angularfire2,firebase_database) { 'use strict';

function isString(value) {
    return typeof value === 'string';
}
function isFirebaseDataSnapshot(value) {
    return typeof value.exportVal === 'function';
}
function isNil(obj) {
    return obj === undefined || obj === null;
}
function isFirebaseRef(value) {
    return typeof value.set === 'function';
}
function getRef(database, pathRef) {
    return isFirebaseRef(pathRef) ? pathRef
        : database.ref(pathRef);
}
function checkOperationCases(item, cases) {
    if (isString(item)) {
        return cases.stringCase();
    }
    else if (isFirebaseRef(item)) {
        return cases.firebaseCase();
    }
    else if (isFirebaseDataSnapshot(item)) {
        return cases.snapshotCase();
    }
    throw new Error("Expects a string, snapshot, or reference. Got: " + typeof item);
}

function fromRef(ref, event, listenType) {
    if (listenType === void 0) { listenType = 'on'; }
    return new rxjs.Observable(function (subscriber) {
        var fn = ref[listenType](event, function (snapshot, prevKey) {
            subscriber.next({ snapshot: snapshot, prevKey: prevKey });
            if (listenType == 'once') {
                subscriber.complete();
            }
        }, subscriber.error.bind(subscriber));
        if (listenType == 'on') {
            return { unsubscribe: function () { ref.off(event, fn); } };
        }
        else {
            return { unsubscribe: function () { } };
        }
    }).pipe(rxjs_operators.map(function (payload) {
        var snapshot = payload.snapshot, prevKey = payload.prevKey;
        var key = null;
        if (snapshot.exists()) {
            key = snapshot.key;
        }
        return { type: event, payload: snapshot, prevKey: prevKey, key: key };
    }), rxjs_operators.delay(0), rxjs_operators.share());
}

function listChanges(ref, events) {
    return fromRef(ref, 'value', 'once').pipe(rxjs_operators.switchMap(function (snapshotAction) {
        var childEvent$ = [rxjs.of(snapshotAction)];
        events.forEach(function (event) { return childEvent$.push(fromRef(ref, event)); });
        return rxjs.merge.apply(void 0, childEvent$).pipe(rxjs_operators.scan(buildView, []));
    }), rxjs_operators.distinctUntilChanged());
}
function positionFor(changes, key) {
    var len = changes.length;
    for (var i = 0; i < len; i++) {
        if (changes[i].payload.key === key) {
            return i;
        }
    }
    return -1;
}
function positionAfter(changes, prevKey) {
    if (isNil(prevKey)) {
        return 0;
    }
    else {
        var i = positionFor(changes, prevKey);
        if (i === -1) {
            return changes.length;
        }
        else {
            return i + 1;
        }
    }
}
function buildView(current, action) {
    var payload = action.payload, type = action.type, prevKey = action.prevKey, key = action.key;
    var currentKeyPosition = positionFor(current, key);
    var afterPreviousKeyPosition = positionAfter(current, prevKey);
    switch (action.type) {
        case 'value':
            if (action.payload && action.payload.exists()) {
                var prevKey_1 = null;
                action.payload.forEach(function (payload) {
                    var action = { payload: payload, type: 'value', prevKey: prevKey_1, key: payload.key };
                    prevKey_1 = payload.key;
                    current = current.concat([action]);
                    return false;
                });
            }
            return current;
        case 'child_added':
            if (currentKeyPosition > -1) {
                var previous = current[currentKeyPosition - 1];
                if ((previous && previous.key || null) != prevKey) {
                    current = current.filter(function (x) { return x.payload.key !== payload.key; });
                    current.splice(afterPreviousKeyPosition, 0, action);
                }
            }
            else if (prevKey == null) {
                return [action].concat(current);
            }
            else {
                current = current.slice();
                current.splice(afterPreviousKeyPosition, 0, action);
            }
            return current;
        case 'child_removed':
            return current.filter(function (x) { return x.payload.key !== payload.key; });
        case 'child_changed':
            return current.map(function (x) { return x.payload.key === key ? action : x; });
        case 'child_moved':
            if (currentKeyPosition > -1) {
                var data = current.splice(currentKeyPosition, 1)[0];
                current = current.slice();
                current.splice(afterPreviousKeyPosition, 0, data);
                return current;
            }
            return current;
        default:
            return current;
    }
}

function validateEventsArray(events) {
    if (isNil(events) || events.length === 0) {
        events = ['child_added', 'child_removed', 'child_changed', 'child_moved'];
    }
    return events;
}

function snapshotChanges$1(query, events) {
    events = validateEventsArray(events);
    return listChanges(query, events);
}

function stateChanges(query, events) {
    events = validateEventsArray(events);
    var childEvent$ = events.map(function (event) { return fromRef(query, event); });
    return rxjs.merge.apply(void 0, childEvent$);
}

function auditTrail(query, events) {
    var auditTrail$ = stateChanges(query, events)
        .pipe(rxjs_operators.scan(function (current, action) { return current.concat([action]); }, []));
    return waitForLoaded(query, auditTrail$);
}
function loadedData(query) {
    return fromRef(query, 'value')
        .pipe(rxjs_operators.map(function (data) {
        var lastKeyToLoad;
        data.payload.forEach(function (child) {
            lastKeyToLoad = child.key;
            return false;
        });
        return { data: data, lastKeyToLoad: lastKeyToLoad };
    }));
}
function waitForLoaded(query, action$) {
    var loaded$ = loadedData(query);
    return loaded$
        .pipe(rxjs_operators.withLatestFrom(action$), rxjs_operators.map(function (_a) {
        var loaded = _a[0], actions = _a[1];
        var lastKeyToLoad = loaded.lastKeyToLoad;
        var loadedKeys = actions.map(function (snap) { return snap.key; });
        return { actions: actions, lastKeyToLoad: lastKeyToLoad, loadedKeys: loadedKeys };
    }), rxjs_operators.skipWhile(function (meta) { return meta.loadedKeys.indexOf(meta.lastKeyToLoad) === -1; }), rxjs_operators.map(function (meta) { return meta.actions; }));
}

function createDataOperationMethod(ref, operation) {
    return function dataOperation(item, value) {
        return checkOperationCases(item, {
            stringCase: function () { return ref.child(item)[operation](value); },
            firebaseCase: function () { return item[operation](value); },
            snapshotCase: function () { return item.ref[operation](value); }
        });
    };
}

function createRemoveMethod(ref) {
    return function remove(item) {
        if (!item) {
            return ref.remove();
        }
        return checkOperationCases(item, {
            stringCase: function () { return ref.child(item).remove(); },
            firebaseCase: function () { return item.remove(); },
            snapshotCase: function () { return item.ref.remove(); }
        });
    };
}

function createListReference(query, afDatabase) {
    return {
        query: query,
        update: createDataOperationMethod(query.ref, 'update'),
        set: createDataOperationMethod(query.ref, 'set'),
        push: function (data) { return query.ref.push(data); },
        remove: createRemoveMethod(query.ref),
        snapshotChanges: function (events) {
            var snapshotChanges$ = snapshotChanges$1(query, events);
            return afDatabase.scheduler.keepUnstableUntilFirst(afDatabase.scheduler.runOutsideAngular(snapshotChanges$));
        },
        stateChanges: function (events) {
            var stateChanges$ = stateChanges(query, events);
            return afDatabase.scheduler.keepUnstableUntilFirst(afDatabase.scheduler.runOutsideAngular(stateChanges$));
        },
        auditTrail: function (events) {
            var auditTrail$ = auditTrail(query, events);
            return afDatabase.scheduler.keepUnstableUntilFirst(afDatabase.scheduler.runOutsideAngular(auditTrail$));
        },
        valueChanges: function (events) {
            var snapshotChanges$ = snapshotChanges$1(query, events);
            return afDatabase.scheduler.keepUnstableUntilFirst(afDatabase.scheduler.runOutsideAngular(snapshotChanges$)).pipe(rxjs_operators.map(function (actions) { return actions.map(function (a) { return a.payload.val(); }); }));
        }
    };
}

function createObjectSnapshotChanges(query) {
    return function snapshotChanges() {
        return fromRef(query, 'value');
    };
}

function createObjectReference(query, afDatabase) {
    return {
        query: query,
        snapshotChanges: function () {
            var snapshotChanges$ = createObjectSnapshotChanges(query)();
            return afDatabase.scheduler.keepUnstableUntilFirst(afDatabase.scheduler.runOutsideAngular(snapshotChanges$));
        },
        update: function (data) { return query.ref.update(data); },
        set: function (data) { return query.ref.set(data); },
        remove: function () { return query.ref.remove(); },
        valueChanges: function () {
            var snapshotChanges$ = createObjectSnapshotChanges(query)();
            return afDatabase.scheduler.keepUnstableUntilFirst(afDatabase.scheduler.runOutsideAngular(snapshotChanges$)).pipe(rxjs_operators.map(function (action) { return action.payload.exists() ? action.payload.val() : null; }));
        },
    };
}

var AngularFireDatabase = (function () {
    function AngularFireDatabase(options, nameOrConfig, databaseURL, platformId, zone) {
        this.scheduler = new angularfire2.FirebaseZoneScheduler(zone, platformId);
        this.database = zone.runOutsideAngular(function () {
            var app = angularfire2._firebaseAppFactory(options, nameOrConfig);
            return app.database(databaseURL || undefined);
        });
    }
    AngularFireDatabase.prototype.list = function (pathOrRef, queryFn) {
        var ref = getRef(this.database, pathOrRef);
        var query = ref;
        if (queryFn) {
            query = queryFn(ref);
        }
        return createListReference(query, this);
    };
    AngularFireDatabase.prototype.object = function (pathOrRef) {
        var ref = getRef(this.database, pathOrRef);
        return createObjectReference(ref, this);
    };
    AngularFireDatabase.prototype.createPushId = function () {
        return this.database.ref().push().key;
    };
    AngularFireDatabase.decorators = [
        { type: _angular_core.Injectable },
    ];
    AngularFireDatabase.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [angularfire2.FirebaseOptionsToken,] }] },
        { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [angularfire2.FirebaseNameOrConfigToken,] }] },
        { type: String, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [angularfire2.RealtimeDatabaseURL,] }] },
        { type: Object, decorators: [{ type: _angular_core.Inject, args: [_angular_core.PLATFORM_ID,] }] },
        { type: _angular_core.NgZone }
    ]; };
    return AngularFireDatabase;
}());

var AngularFireDatabaseModule = (function () {
    function AngularFireDatabaseModule() {
    }
    AngularFireDatabaseModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    providers: [AngularFireDatabase]
                },] },
    ];
    return AngularFireDatabaseModule;
}());

exports.AngularFireDatabase = AngularFireDatabase;
exports.RealtimeDatabaseURL = angularfire2.RealtimeDatabaseURL;
exports.listChanges = listChanges;
exports.createListReference = createListReference;
exports.snapshotChanges = snapshotChanges$1;
exports.stateChanges = stateChanges;
exports.auditTrail = auditTrail;
exports.fromRef = fromRef;
exports.AngularFireDatabaseModule = AngularFireDatabaseModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
