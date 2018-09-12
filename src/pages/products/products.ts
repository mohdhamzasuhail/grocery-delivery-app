import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GlobalProvider } from '../../providers/global/global';
import { AccountPage } from '../account/account';

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

	productsRef : AngularFireList<any>;
  products    : Observable<any[]>;

  cartRef : AngularFireList<any>;
  cart    : Observable<any[]>;

  product_content : any    = [];
  categoryInfo    : any    = {};
  quantityId      : number;
  productQuantity : number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase,
    public globalService : GlobalProvider, public toastCtrl : ToastController) {
		
    this.categoryInfo = this.globalService.showProduct;

  	var final_cat_subcat = this.globalService.showProduct.categoryId + "_" + this.globalService.showProduct.subcategoryId;

  	this.productsRef = db.list('products/', ref => ref.orderByChild('category_subcategory').equalTo(final_cat_subcat));
    this.products    = this.productsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    this.cartRef = db.list('cart/' + this.globalService.userProfile.userId);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  goBack() {
  	this.navCtrl.pop();
  }

  quantitySelected(i : number) {
    this.quantityId = i;
  }

  addToCart(productKey : string) {

    if(this.globalService.userProfile.status == 'true') {
      
      if (this.quantityId.toString() != '') {
        this.productQuantity = 1;
        this.product_content.push(productKey, this.quantityId, this.productQuantity);
        // this.globalService.cart.push(this.product_content);
        var temp = [];
        if(localStorage.getItem("cart")) {
          temp = JSON.parse(localStorage.getItem("cart"));          
          temp.push(this.product_content);
          this.product_content = [];
          localStorage.removeItem("cart");
          localStorage.setItem("cart", JSON.stringify(temp));
          console.log(localStorage.getItem("cart"));
        }

        else {
          temp.push(this.product_content);
          this.product_content = [];
          localStorage.setItem("cart", JSON.stringify(temp));
          console.log(localStorage.getItem("cart"));
        }

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

    else {
      let toast = this.toastCtrl.create({
          message: 'Please login to add products to cart.',
          duration: 1500,
          position: 'bottom'
        });
        toast.onDidDismiss(() => {
          this.navCtrl.push(AccountPage);
        });
        toast.present();
    }

  }

}
