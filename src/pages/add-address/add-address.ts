import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalProvider } from '../../providers/global/global';

@IonicPage()
@Component({
  selector: 'page-add-address',
  templateUrl: 'add-address.html',
})
export class AddAddressPage {

  userInfo      : any = {};
  orderInfo     : any = {};
  addressRef    : AngularFireList<any>;
  address       : Observable<any[]>;
	orderRef      : AngularFireList<any>;
  itemsRef      : AngularFireList<any>;
  showAddress   : any = false;
  proceedButton : any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase,
    public globalService : GlobalProvider, private toastCtrl: ToastController, public loadingCtrl: LoadingController) {
  		
    this.userInfo  = this.globalService.userProfile;
  	this.orderInfo = this.globalService.createShopListOrders;

    this.addressRef = db.list('address/' + this.userInfo.userId + '/');
    this.address = this.addressRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    this.itemsRef = db.list('createShopList/' + this.userInfo.userId + '/');

    this.orderRef = db.list('orders/createShoppingList/' + this.userInfo.userId + '/');

  }

  addAddressButton() {
    this.showAddress = true;
  }

  addressSelected(addressKey: string, addressValue: string) {
    localStorage.setItem("selectedAddress", addressValue);
    this.globalService.createShopListOrders.selectedAddress = addressValue; 
    this.showAddress   = false;
    this.proceedButton = true;  
  }

  addAddress(addressone: string, addresstwo: string, pincode: number, city: string) {
    if (addressone && addresstwo && pincode && city) {

      if (city == "Lucknow") {
        var userAddress = addressone + ', ' + addresstwo + ', ' + city + ' - ' + pincode;  

        this.globalService.userProfile.userAddress = userAddress;
        localStorage.setItem("userAddress", userAddress);

        this.addressRef.push({
          userAddress : userAddress
        });

        this.showAddress = false;

        let toast = this.toastCtrl.create({
            message: 'Address added successfully.',
            duration: 1000,
            position: 'bottom'
          });
          // toast.onDidDismiss(() => {
          // });
          toast.present();
      }

      else {
        let toast = this.toastCtrl.create({
            message: 'Oops! We currently service only in Lucknow.',
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
          message: 'Please enter all details.',
          duration: 1000,
          position: 'bottom'
        });
        // toast.onDidDismiss(() => {
        // });
        toast.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAddressPage');
  }

  goBack() {
    this.navCtrl.pop();
  }

  proceed() {

    if (this.globalService.createShopListOrders.selectedAddress) {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present(); 

      var date = new Date;
      var completeDate = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString() + "-" + date.getDate().toString(); 

      this.orderRef.push({
        orderId     : "TBOID/" + completeDate.toString() + "/#" + Math.floor((Math.random() * 100000)),
        orderDate   : completeDate,
        userAddress : this.globalService.createShopListOrders.selectedAddress,
        listContent : this.globalService.listContent,
        listStatus  : "Pending" 
      });

      this.globalService.createShopListOrders.selectedAddress = '';
      localStorage.removeItem("selectedAddress");

      this.itemsRef.remove();      
      this.globalService.listContent = [];

      let toast = this.toastCtrl.create({
        message: 'Thank you so much for your order with The Banya. We will get back to with the complete order details within half an hour.',
        duration: 3000,
        position: 'bottom'
      });
      toast.onDidDismiss(() => {
         loading.dismiss();
         this.navCtrl.popToRoot();
      });
      toast.present();
    }

    else {
      let toast = this.toastCtrl.create({
        message: 'Please select an address or add a new one.',
        duration: 1000,
        position: 'bottom'
      });
      // toast.onDidDismiss(() => {
      // });
      toast.present();
    }

  }

}
