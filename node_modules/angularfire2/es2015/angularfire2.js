import { InjectionToken } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { Observable, queueScheduler as queue } from 'rxjs';
import { first } from 'rxjs/operators';
export const RealtimeDatabaseURL = new InjectionToken('angularfire2.realtimeDatabaseURL');
export class FirebaseZoneScheduler {
    constructor(zone, platformId) {
        this.zone = zone;
        this.platformId = platformId;
    }
    schedule(...args) {
        return this.zone.runGuarded(function () { return queue.schedule.apply(queue, args); });
    }
    keepUnstableUntilFirst(obs$) {
        if (isPlatformServer(this.platformId)) {
            return new Observable(subscriber => {
                const noop = () => { };
                const task = Zone.current.scheduleMacroTask('firebaseZoneBlock', noop, {}, noop, noop);
                obs$.pipe(first()).subscribe(() => this.zone.runOutsideAngular(() => task.invoke()));
                return obs$.subscribe(subscriber);
            });
        }
        else {
            return obs$;
        }
    }
    runOutsideAngular(obs$) {
        return new Observable(subscriber => {
            return this.zone.runOutsideAngular(() => {
                return obs$.subscribe(value => this.zone.run(() => subscriber.next(value)), error => this.zone.run(() => subscriber.error(error)), () => this.zone.run(() => subscriber.complete()));
            });
        });
    }
}
//# sourceMappingURL=angularfire2.js.map