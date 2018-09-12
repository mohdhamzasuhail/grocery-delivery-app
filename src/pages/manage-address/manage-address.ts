import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalProvider } from '../../providers/global/global';

@IonicPage()
@Component({
  selector: 'page-manage-address',
  templateUrl: 'manage-address.html',
})
export class ManageAddressPage {
  
  userInfo : any = {};
  addressRef: AngularFireList<any>;
  address: Observable<any[]>;
  showAddress : any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase,
    public globalService : GlobalProvider, private toastCtrl: ToastController) {
  		
  	this.userInfo = this.globalService.userProfile;

    this.addressRef = db.list('address/' + this.userInfo.userId + '/');
    this.address = this.addressRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

  }

  addAddressButton() {
    this.showAddress = true;
  }

  addAddress(addressone: string, addresstwo: string, pincode: number, city: string) {
    if (addressone && addresstwo && pincode && city) {

    	if (city == "Lucknow") {
	      var userAddress = addressone + ', ' + addresstwo + ', ' + city + ' - ' + pincode;  

	      this.globalService.userProfile.userAddress = userAddress;
	      localStorage.setItem("userAddress", userAddress);

	      this.addressRef.push({ userAddress : userAddress });
        this.showAddress = false;
	      let toast = this.toastCtrl.create({
	          message: 'Address added successfully!',
	          duration: 2000,
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

  deleteAddress(key: string) {
    this.addressRef.remove(key); 
    this.showAddress = false;  
    let toast = this.toastCtrl.create({
        message: 'Address deleted successfully.',
        duration: 1000,
        position: 'bottom'
      });

      // toast.onDidDismiss(() => {
      // });
      toast.present();    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageAddressPage');
  }

  goBack() {
    this.navCtrl.pop();
  }

}
