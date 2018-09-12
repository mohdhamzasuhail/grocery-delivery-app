import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDetailsPage } from './add-details';

@NgModule({
  declarations: [
    AddDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDetailsPage),
  ],
})
export class AddDetailsPageModule {}
