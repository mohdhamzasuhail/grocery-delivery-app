import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Tabs } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GlobalProvider } from '../../providers/global/global';
import { AccountPage } from '../account/account';

@IonicPage()
@Component({
  selector: 'page-basket',
  templateUrl: 'basket.html',
})
export class BasketPage {

  show_cart: any = [];
  cart: any = [];
  tab:Tabs;
  productQuantityId: any = [];
  productQuantity: any = [];
  productsRef: AngularFireList<any>; products: Observable<any[]>;
  emptyCart: boolean = true;
  totalProducts: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase,
    public globalService : GlobalProvider, public toastCtrl : ToastController) {
    this.tab = this.navCtrl.parent;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasketPage');
  }

  account() {
    this.navCtrl.push(AccountPage);
  }

  goToHome() {
    this.tab.select(0);
  }

  ionViewDidEnter() {
    var productKey: string; var quantityId: number; var productQuantity: number; var sum: number = 0;
    if(localStorage.getItem("cart")) {
      this.show_cart = JSON.parse(localStorage.getItem("cart"));
      
      if(this.show_cart.length != 0) {
        this.cart = [];
        this.totalProducts = this.show_cart.length;
        this.emptyCart = false;
        
        for (let i=0;i<this.show_cart.length;i++) {
          
          productKey = this.show_cart[i][0]; quantityId = this.show_cart[i][1]; productQuantity = this.show_cart[i][2]; 
          
          this.productsRef = this.db.list('products/', ref => ref.orderByKey().equalTo(productKey));
          this.products = this.productsRef.valueChanges();
          this.products.subscribe(action => {
            this.cart.push(action[0]);
            console.log(this.cart[i].productDP[this.show_cart[i][1]]);
            // sum = sum + this.cart[i].productDP[this.show_cart[i][1]];
            // console.log(sum);
          });
          this.productQuantityId[i] = this.show_cart[i][1];
          this.productQuantity[i]   = this.show_cart[i][2];
        }
      }
    }
  }

  removeProduct(productIndex: string) {
    this.cart.splice(productIndex,1);
    var temp_cart = JSON.parse(localStorage.getItem("cart"));
    temp_cart.splice(productIndex,1);
    localStorage.setItem("cart",JSON.stringify(temp_cart));
    this.productQuantityId.splice(productIndex,1);
    this.productQuantity.splice(productIndex,1);
    if(temp_cart.length == 0) {
      this.emptyCart = true;
      this.totalProducts = temp_cart.length;
    }
    else this.totalProducts = temp_cart.length;
  }

}
