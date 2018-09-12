import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { CategoriesPage } from '../pages/categories/categories';
import { SearchPage } from '../pages/search/search';
import { BasketPage } from '../pages/basket/basket';
import { AccountPage } from '../pages/account/account';
import { StartupPage } from '../pages/startup/startup';
import { UploadPage } from '../pages/upload/upload';
import { TabsPage } from '../pages/tabs/tabs';
import { AddDetailsPage } from '../pages/add-details/add-details';
import { ProductPage } from '../pages/product/product';
import { CreateShoppingListPageModule } from '../pages/create-shopping-list/create-shopping-list.module';
import { AddAddressPage } from '../pages/add-address/add-address';
import { ManageAddressPage } from '../pages/manage-address/manage-address';
import { OrdersPage } from '../pages/orders/orders';
import { ProductsPage } from '../pages/products/products';
 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ToastController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { GlobalProvider } from '../providers/global/global';

const firebaseAuth = {
  apiKey: "AIzaSyBCxzV-ZeZFaO0-oe4lugdHMpp5ysk1sSs",
  authDomain: "thebanya-app.firebaseapp.com",
  databaseURL: "https://thebanya-app.firebaseio.com",
  projectId: "thebanya-app",
  storageBucket: "thebanya-app.appspot.com",
  messagingSenderId: "312112616058"
};

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    CategoriesPage,
    SearchPage,
    BasketPage,
    AccountPage,
    StartupPage,
    UploadPage,
    AddDetailsPage,
    ProductPage,
    AddAddressPage,
    ManageAddressPage,
    OrdersPage,
    ProductsPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    CreateShoppingListPageModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
      iconMode: 'md',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      menuType: 'overlay',
      tabsLayout: 'title-hide',
      tabsHighlight: true,
      pageTransition: 'ios-transition'
    }
  )],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    CategoriesPage,
    SearchPage,
    BasketPage,
    AccountPage,
    StartupPage,
    UploadPage,
    AddDetailsPage,
    ProductPage,
    AddAddressPage,
    ManageAddressPage,
    OrdersPage,
    ProductsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ToastController,
    Camera,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider
  ]
})
export class AppModule {}
