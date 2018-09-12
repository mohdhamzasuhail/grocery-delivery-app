import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CategoriesPage } from '../categories/categories';
import { UploadPage } from '../upload/upload';
import { BasketPage } from '../basket/basket';

import { GlobalProvider } from '../../providers/global/global';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CategoriesPage;
  tab3Root = UploadPage;
  tab4Root = BasketPage;
 	
  totalProducts: number;

  constructor(public globalService: GlobalProvider) {
  
  	
  }
  
}
