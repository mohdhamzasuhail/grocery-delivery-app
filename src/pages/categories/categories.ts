import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AccountPage } from '../account/account';
import { ProductsPage } from '../products/products';
import { GlobalProvider } from '../../providers/global/global';

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  categoriesRef : AngularFireList<any>;
  categories    : Observable<any[]>;
  showSubCatBtn : any = false;
  
  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public loadingCtrl: LoadingController,
    public globalService : GlobalProvider) {

    let loading = this.loadingCtrl.create({
      content: 'Loading...'
    });

    loading.present();

    this.categoriesRef = db.list('categories/');
    this.categories    = this.categoriesRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    setTimeout(() => {
      loading.dismiss();
    }, 1000);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  account() {
    this.navCtrl.push(AccountPage);    
  }

  showProducts(categoryId : string, category : string , subcategoryId : string, subcategory : string) {

    localStorage.setItem("categoryId", categoryId);
    localStorage.setItem("category", category);
    
    localStorage.setItem("subcategoryId", subcategoryId);
    localStorage.setItem("subcategory", subcategory);

    this.globalService.showProduct.categoryId    = categoryId; 
    this.globalService.showProduct.category      = category; 

    this.globalService.showProduct.subcategoryId = subcategoryId;
    this.globalService.showProduct.subcategory   = subcategory; 
  
    this.navCtrl.push(ProductsPage); 
  }

}
