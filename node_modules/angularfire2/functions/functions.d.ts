import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseOptions, FirebaseAppConfig } from 'angularfire2';
import { FirebaseFunctions, FirebaseZoneScheduler } from 'angularfire2';
export declare class AngularFireFunctions {
    readonly functions: FirebaseFunctions;
    readonly scheduler: FirebaseZoneScheduler;
    constructor(options: FirebaseOptions, nameOrConfig: string | FirebaseAppConfig | undefined, platformId: Object, zone: NgZone);
    httpsCallable<T = any, R = any>(name: string): (data: T) => Observable<R>;
}
