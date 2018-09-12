import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import { GlobalProvider } from '../../providers/global/global';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddAddressPage } from '../add-address/add-address';

@IonicPage()
@Component({
  selector: 'page-create-shopping-list',
  templateUrl: 'create-shopping-list.html',
})
export class CreateShoppingListPage {

  userInfo : any = {};
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  listContent : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase, 
    public globalService : GlobalProvider, private alertCtrl: AlertController, private toastCtrl: ToastController) {

    this.userInfo    = this.globalService.userProfile;
    this.listContent = this.globalService.listContent;

    this.itemsRef = db.list('createShopList/' + this.userInfo.userId + '/');
    this.items    = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

  }

  addItem(itemName: string) {
    if (itemName.length == 0) {
      let toast = this.toastCtrl.create({
        message: 'Add Item Name.',
        duration: 1000,
        position: 'bottom'
      });

      // toast.onDidDismiss(() => {
      // });  
      toast.present();  
    }
    else {
      this.itemsRef.push({ item: itemName });
      this.globalService.listContent.push(itemName);
      console.log(this.globalService.listContent);

      let toast = this.toastCtrl.create({
          message: 'Item added successfully.',
          duration: 1000,
          position: 'bottom'
        });
        // toast.onDidDismiss(() => {
        // });
        toast.present();
    }
  }
  
  updateItem(key: string, newText: string) {
    this.itemsRef.update(key, { item: newText });

    var index = this.globalService.listContent.indexOf(newText);
    this.globalService.listContent[index] = newText;

    let toast = this.toastCtrl.create({
        message: 'Item updated successfully.',
        duration: 1000,
        position: 'bottom'
      });

      // toast.onDidDismiss(() => {
      // });
      toast.present();
  }
  deleteItem(key: string, itemName : string) {
    this.itemsRef.remove(key);

    var index = this.globalService.listContent.indexOf(itemName);
    this.globalService.listContent.splice(index,1);
    
    let toast = this.toastCtrl.create({
        message: 'Item removed successfully.',
        duration: 1000,
        position: 'bottom'
      });

      // toast.onDidDismiss(() => {
      // });
      toast.present();    
  }
  deleteEverything() {
      let alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete all the items from this list?',
      buttons: [
        {
          text: 'No, take me back',
          role: 'cancel',
          // handler: () => {
          //   console.log('Cancel clicked');
          // }
        },
        {
          text: 'Yes',
          handler: () => {
            // console.log('Buy clicked');
            this.itemsRef.remove();
            this.globalService.listContent = [];
            let toast = this.toastCtrl.create({
              message: 'Shopping List cleared successfully.',
              duration: 1000,
              position: 'bottom'
            });

            // toast.onDidDismiss(() => {
            // });
            toast.present();
          }
        }
      ]
    });
    alert.present();
  }

  confirmList() {
    if (this.listContent.length == 0) {
      let toast = this.toastCtrl.create({
        message: 'Please add at least one item.',
        duration: 1000,
        position: 'bottom'
      });

      // toast.onDidDismiss(() => {
      // });
      toast.present();
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Confirm Shopping List',
        message: 'Are you sure you want continue your order with this Shopping List?',
        buttons: [
          {
            text: 'No, take me back',
            role: 'cancel',
            // handler: () => {
            //   console.log('Cancel clicked');
            // }
          },
          {
            text: 'Yes',
            handler: () => {
              this.navCtrl.push(AddAddressPage);
            }
          }
        ]
      });
      alert.present();
    }
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateShoppingListPage');
  }

  goToHome() {
  	this.navCtrl.pop();
  }

}
