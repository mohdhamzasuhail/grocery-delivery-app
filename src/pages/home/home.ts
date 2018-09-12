import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AccountPage } from '../account/account';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	productsRef : AngularFireList<any>;
  products    : Observable<any[]>;
  quantityId  : any = ''; 
  productQuantity : any = '';

  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public toastCtrl : ToastController) {

  	this.productsRef = db.list('products/');
    this.products    = this.productsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

  }

  account() {
    this.navCtrl.push(AccountPage);
  }

  quantitySelected(i : string) {
    this.quantityId = i;
  }

  addToCart(productKey : string) {
    if (this.quantityId.toString() != '') {
      this.productQuantity = "1";

      // this.cartRef.push({
      //   productKey      : productKey,
      //   quantityId      : this.quantityId,
      //   productQuantity : this.productQuantity
      // });

      let toast = this.toastCtrl.create({
        message: 'Product added to cart.',
        duration: 1500,
        position: 'bottom'
      });
      // toast.onDidDismiss(() => {
      // });
      toast.present();
    }

    else {
      let toast = this.toastCtrl.create({
        message: 'Please select quantity of the product.',
        duration: 1500,
        position: 'bottom'
      });
      // toast.onDidDismiss(() => {
      // });
      toast.present();
    }

  }

}