import { fromDocRef } from '../observable/fromRef';
import { map } from 'rxjs/operators';
import { associateQuery } from '../firestore';
import { AngularFirestoreCollection } from '../collection/collection';
export class AngularFirestoreDocument {
    constructor(ref, afs) {
        this.ref = ref;
        this.afs = afs;
    }
    set(data, options) {
        return this.ref.set(data, options);
    }
    update(data) {
        return this.ref.update(data);
    }
    delete() {
        return this.ref.delete();
    }
    collection(path, queryFn) {
        const collectionRef = this.ref.collection(path);
        const { ref, query } = associateQuery(collectionRef, queryFn);
        return new AngularFirestoreCollection(ref, query, this.afs);
    }
    snapshotChanges() {
        const fromDocRef$ = fromDocRef(this.ref);
        const scheduledFromDocRef$ = this.afs.scheduler.runOutsideAngular(fromDocRef$);
        return this.afs.scheduler.keepUnstableUntilFirst(scheduledFromDocRef$);
    }
    valueChanges() {
        return this.snapshotChanges().pipe(map(action => {
            return action.payload.data();
        }));
    }
}
//# sourceMappingURL=document.js.map