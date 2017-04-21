import { Component } from '@angular/core';

/**
 * Generated class for the TestC component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'test-c',
  templateUrl: 'test-c.html'
})
export class TestC {

  text: string;

  constructor() {
    console.log('Hello TestC Component');
    this.text = 'Hello World';
  }

}
