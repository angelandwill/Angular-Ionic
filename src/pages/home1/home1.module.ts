import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Home1 } from './home1';

@NgModule({
  declarations: [
    Home1,
  ],
  imports: [
    IonicPageModule.forChild(Home1),
  ],
  exports: [
    Home1
  ]
})
export class Home1Module {}
