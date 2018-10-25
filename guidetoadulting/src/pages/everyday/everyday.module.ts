import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EverydayPage } from './everyday';

@NgModule({
  declarations: [
    EverydayPage,
  ],
  imports: [
    IonicPageModule.forChild(EverydayPage),
  ],
})
export class EverydayPageModule {}
