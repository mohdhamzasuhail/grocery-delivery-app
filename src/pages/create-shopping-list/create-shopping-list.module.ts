import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateShoppingListPage } from './create-shopping-list';

@NgModule({
  declarations: [
    CreateShoppingListPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateShoppingListPage),
  ],
})
export class CreateShoppingListPageModule {}
