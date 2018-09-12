import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
// import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-startup',
  templateUrl: 'startup.html',
})
export class StartupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController) {
  }

  
  ionViewDidLoad() {
    this.menu.swipeEnable(false);
    console.log('ionViewDidLoad StartupPage');
    localStorage.setItem("firstVisit", "1");
  }

  getstarted() {    
    this.menu.swipeEnable(true);
    this.navCtrl.setRoot(TabsPage, {}, { animate: true, direction: "forward" });
  }

}
