import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Account } from '../../model/account';

import { GlobalProvider } from '../../providers/global/global';

@IonicPage()
@Component({
  selector: 'page-add-details',
  templateUrl: 'add-details.html',
})
export class AddDetailsPage {

  account = {} as Account;

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController,
    public navParams: NavParams, private toastCtrl: ToastController, public fire: AngularFireAuth,
    public db: AngularFireDatabase, private globalService : GlobalProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDetailsPage');
  }

  register() {
      
      this.fire.authState.subscribe(auth => {
        this.db.object(`users/${auth.uid}`).set(this.account);

        localStorage.setItem("userId", auth.uid);
        this.globalService.userProfile.userId = auth.uid;
      })


      let toast = this.toastCtrl.create({
        message: 'Hello, Welcome to The Banya',
        duration: 1000,
        position: 'bottom'
      });

      toast.onDidDismiss(() => {
        localStorage.setItem("status", "true");
        localStorage.setItem("userName", this.account.userName);
        localStorage.setItem("userNumber", this.account.userNumber);

        this.globalService.userProfile.status     = "true";
        this.globalService.userProfile.userName   = this.account.userName;
        this.globalService.userProfile.userNumber = this.account.userNumber;

        this.navCtrl.pop();
      });
      toast.present();

  }
  

}
