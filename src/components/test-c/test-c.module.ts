import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { TestC } from './test-c';

@NgModule({
  declarations: [
    TestC,
  ],
  imports: [
    //IonicModule.forChild(TestC),
  ],
  exports: [
    TestC
  ]
})
export class TestCModule {}
