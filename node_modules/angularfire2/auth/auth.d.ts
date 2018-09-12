import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseAppConfig, FirebaseOptions } from 'angularfire2';
import { User, auth } from 'firebase';
import { FirebaseAuth } from 'angularfire2';
export declare class AngularFireAuth {
    private zone;
    readonly auth: FirebaseAuth;
    readonly authState: Observable<User | null>;
    readonly idToken: Observable<string | null>;
    readonly user: Observable<User | null>;
    readonly idTokenResult: Observable<auth.IdTokenResult | null>;
    constructor(options: FirebaseOptions, nameOrConfig: string | FirebaseAppConfig | undefined, platformId: Object, zone: NgZone);
}
