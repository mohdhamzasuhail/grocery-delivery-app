import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalProvider } from '../../providers/global/global';

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {

  userInfo      : any = {};
  ordersRef : AngularFireList<any>;
  orders    : Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase,
    public globalService : GlobalProvider, public toastCtrl : ToastController, private alertCtrl: AlertController) {

    this.userInfo = this.globalService.userProfile;
    
    this.ordersRef = db.list('orders/createShoppingList/' + this.userInfo.userId + '/');
    this.orders    = this.ordersRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  showStatusInfo() {
    let alert = this.alertCtrl.create({
      title: 'Order Status Info',
      message: '<h5><b>Pending: </b>Your Shopping List is with us and we are revieweing it. We will get back to you in no time with the complete order details including the overall cost of the list.</h5><h5><b>Confirmed: </b>Your shopping list has been confirmed by us, and we have provided you with the complete order details. After this you can either confirm your order or cancel it.</h5><h5><b>Approved: </b>You have reviewed and approved the confirmed shopping list and want us to deliver the products in the shopping list.</h5><h5><b>Completed: </b>The products listed in your shopping list have been delivered and payment has been recieved by us.</h5><h5><b>Cancelled: </b>Your order got cancelled either because you cancelled it or there was error.</h5>',
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

  confirmOrder(key: string) {
    this.ordersRef.update(key, { listStatus : "Approved"});

    let toast = this.toastCtrl.create({
        message: 'Order confirmed. Thank you so much for placing your order with us! ',
        duration: 1500,
        position: 'bottom'
      });

      // toast.onDidDismiss(() => {
      // });
      toast.present();
  }

  cancelOrder(key: string) {
    this.ordersRef.update(key, { listStatus : "Cancelled"});

    let toast = this.toastCtrl.create({
        message: 'Order cancelled.',
        duration: 1500,
        position: 'bottom'
      });

      // toast.onDidDismiss(() => {
      // });
      toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
  }

  goToHome() {
  	this.navCtrl.pop();
  }

}
