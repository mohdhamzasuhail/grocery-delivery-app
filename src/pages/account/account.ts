import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AddDetailsPage } from '../add-details/add-details';
import { ManageAddressPage } from '../manage-address/manage-address';
import { OrdersPage } from '../orders/orders';

import { GlobalProvider } from '../../providers/global/global';
import { Geolocation } from '@ionic-native/geolocation';

import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  @ViewChild('email') email;
  @ViewChild('password') password;

  @ViewChild('userEmail') userEmail;
  @ViewChild('userPassword') userPassword;
  @ViewChild('userConfirmPassword') userConfirmPassword;

  userInfo       : any     = {};
  loginOption    : boolean = true;
  registerOption : boolean = false;

  usersRef: AngularFireList<any>;
  users: Observable<any[]>;

  lat : any;
  lng : any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, private toastCtrl: ToastController,
    public fire: AngularFireAuth, public db: AngularFireDatabase, private globalService : GlobalProvider,
    public geo : Geolocation, public platform: Platform, public loadingCtrl: LoadingController) {
   
    this.userInfo = this.globalService.userProfile;
  
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.geo.getCurrentPosition().then( pos => {
        this.lat = pos.coords.latitude;
        this.lng = pos.coords.longitude;
      })
      .catch( err => {
        console.log('ERROR:',JSON.stringify(err));
      }) 

    });
    console.log('ionViewDidLoad AccountPage');
  }

  goToHome() {
    this.navCtrl.pop();
  }

  manageAddress() {
    this.navCtrl.push(ManageAddressPage);
  }

  ordersPage() {
    this.navCtrl.push(OrdersPage);
  }

  alert(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    }).present();
  }

  goToLogin() {
    this.loginOption = true;
    this.registerOption = false;
  }

  goToRegister() {
    this.loginOption = false;
    this.registerOption = true;
  }

  login() {

    if (this.email.value && this.password.value) {

      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();

      this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
        .then(data => {
          var user = this.fire.auth.currentUser;
          if (user) {
             
            localStorage.setItem("status", "true");
            localStorage.setItem("userId", user.uid);
            localStorage.setItem("userEmail", user.email);

            this.globalService.userProfile.status    = "true";
            this.globalService.userProfile.userId    = user.uid;
            this.globalService.userProfile.userEmail = user.email;


            this.usersRef = this.db.list('users/' + user.uid);
            this.users = this.usersRef.valueChanges();

            this.users.subscribe(action => {

              this.globalService.userProfile.userName   = action[0];
              this.globalService.userProfile.userNumber = action[1];

              localStorage.setItem("userName", action[0]);
              localStorage.setItem("userNumber", action[1]);
            });

            loading.dismiss();
            this.alert('Welcome back to The Banya!');
            this.navCtrl.pop();
          }

        })
        .catch(error => {
          // console.log("Error Login", error);
          loading.dismiss();
          this.alert(error.message);
        })
      // console.log(this.email.value,this.password.value);
    }

    else {
      this.alert('Please enter all details!');
    }
  }

  register() {

    if (this.userEmail.value && this.userPassword.value && this.userConfirmPassword.value) {

      if (this.userConfirmPassword.value == this.userPassword.value) {
        
        let loading = this.loadingCtrl.create({
          content: 'Loading...'
        });
        loading.present();

        localStorage.setItem("userEmail", this.userEmail.value);
        this.globalService.userProfile.userEmail = this.userEmail.value;

  
        this.fire.auth.createUserWithEmailAndPassword(this.userEmail.value, this.userPassword.value)
          .then(data => {
            this.navCtrl.push(AddDetailsPage);
            loading.dismiss();
          })
          .catch(error => {
            loading.dismiss();
            this.alert(error.message);
          })
          
      }

      else {
        let toast = this.toastCtrl.create({
          message: 'Passwords do not match! ',
          duration: 1000,
          position: 'bottom'
        });

        toast.onDidDismiss(() => {
        });
        toast.present();
      }

    }

    else {
      let toast = this.toastCtrl.create({
        message: 'Please enter all details! ',
        duration: 1000,
        position: 'bottom'
      });

      toast.onDidDismiss(() => {
      });
      toast.present();
    }
  }

  logout() {
    this.fire.auth.signOut();
    this.navCtrl.pop();

    let toast = this.toastCtrl.create({
      message: 'Signed out! Come back soon! ',
      duration: 1000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      localStorage.removeItem("status");
      localStorage.removeItem("userId");
      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userNumber");
      this.globalService.userProfile.status     = "false";
      this.globalService.userProfile.userId     = "";
      this.globalService.userProfile.userName   = "";
      this.globalService.userProfile.userNumber = "";
      this.globalService.userProfile.userEmail  = "";
      this.globalService.createShopListOrders.selectedAddress = '';
    });
    toast.present();
  }

}
