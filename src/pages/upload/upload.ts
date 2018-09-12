import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AccountPage } from '../account/account';
import { CreateShoppingListPage } from '../create-shopping-list/create-shopping-list';
import { storage } from 'firebase';
import { Camera } from '@ionic-native/camera';
import { GlobalProvider } from '../../providers/global/global';

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {

  scannedData    : any = {};
  userInfo       : any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
    private camera : Camera, private globalService : GlobalProvider, private toastCtrl: ToastController) {

    this.userInfo = this.globalService.userProfile;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }

  account() {
    this.navCtrl.push(AccountPage);
    // this.navCtrl.setRoot(AccountPage, {}, { animate: true, direction: "forward" });
  }

  takePhoto() {
      this.camera.getPicture({
      quality : 95,
      destinationType : this.camera.DestinationType.DATA_URL,
      sourceType : this.camera.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: true
    }).then(profilePicture => {
      // Send the picture to Firebase Storage
      const selfieRef = storage().ref('profilePictures/user1/profilePicture.png');
      selfieRef.putString(profilePicture, 'base64', {contentType: 'image/jpg'});
    }, error => {
      // Log an error to the console if something goes wrong.
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

  uploadShoppingListInfo() {
    let alert = this.alertCtrl.create({
      title: 'Upload Shopping List',
      message: 'Like your traditional way of shopping by creating a shopping list? Don\'t worry\, we\'ve got it covered. Just click a photo of your shopping list, and we\'ll deliver all the products to you within 3 Hours! <br> Awesome, right?',
      buttons: [
        {
          text: 'Awesome!',
          role: 'cancel',
          // handler: () => {
          //   console.log('Got it!');
          // }
        }
      ]
    });
    alert.present();
  }

  createShoppingListInfo() {
    let alert = this.alertCtrl.create({
      title: 'Create Shopping List',
      message: 'You can create a Shopping List here itself, either type it out or simply scan the Barcode of the product and it will be added to your list.',
      buttons: [
        {
          text: 'Awesome!',
          role: 'cancel',
          // handler: () => {
          //   console.log('Got it!');
          // }
        }
      ]
    });
    alert.present();
  }

  goToCreateShoppingListPage() {
    var login_status = this.userInfo.status;
    if (login_status == "true") {
      this.navCtrl.push(CreateShoppingListPage);
    }
    else {
      let toast = this.toastCtrl.create({
        message: 'Oops! Please login to Create Shopping List',
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