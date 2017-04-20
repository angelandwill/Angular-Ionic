import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Home1 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home1',
  templateUrl: 'home1.html',
})
export class Home1 {

  members:Array<any>

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.members=[
    {index:"3",title:"guming",date:"2017-4-20",Author:"unknown",Agree:true},
    {index:"1",title:"jinpo",date:"2017-4-1",Author:"unknown",Agree:true},
    {index:"5",title:"changkai",date:"2017-3-10",Author:"unknown",Agree:true},
    {index:"2",title:"guojie",date:"2016-4-20",Author:"unknown",Agree:true},
    {index:"8",title:"zhangfeng",date:"2017-2-20",Author:"unknown",Agree:true}
    ]
  }

  sortList(sortType:string="A")
  {
    if(sortType=='D')
    {
      this.sortDESC();
    }
    else if(sortType=="N")
    {
      this.sortDisorder();
    }
    else
    {
      this.sortASC();
    }
  }

  sortASC()
  {
    this.members.sort(
      function(a, b) {
        var A = a.index;
        var B = b.index;
        if (A < B) {
          return -1;
        }
        if (A > B) {
          return 1;
        }
        return 0;
      }
    );
  }

  sortDESC()
  {
    this.members.sort(
      function(a, b) {
        var A = a.index;
        var B = b.index;
        if (A < B) {
          return 1;
        }
        if (A > B) {
          return -1;
        }
        return 0;
      }
    );
  }

  sortDisorder()
  {
    this.members.sort(
      function(a, b) {
        let A = Math.random()*100;        
        let B =  Math.random()*100;
              
        if (A < B) {
          return -1;
        }
        if (A > B) {
          return 1;
        }
        return 0;
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home1');
  }

}
