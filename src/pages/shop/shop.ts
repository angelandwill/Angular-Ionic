import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

import { ShopService } from "../../providers/shop-provider"


/**
 * Generated class for the shop page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class Shop {

  products:Array<any>

  currentProduct:any
  object:any={
    productName:"",
    price:"",
    amount:""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,private shopServ:ShopService,public viewCtrl:ViewController) {

    this.shopServ.findClasses("Product").then(
      data=>{
        if(data&&data.json().results){
          this.products = data.json().results
          //console.log(data.json().results)
        }
    })  
  }

  addToCart(product?)
  {
    //console.log("11111")
    
    console.log(product)
    //this.currentProduct=this.navParams.data.product
    if(product){
      
      this.object.productName = product.productName
      this.object.price="5.5"
      this.object.amount="1"
    }
    
    this.shopServ.saveClass("Cart",this.object).then(data=>{
      console.log(data)
      //this.object.objectId = data.json().objectId
      //this.object.createdAt = data.json().createAt
      //this.viewCtrl.dismiss(this.object)
        }).catch(err=>{
      console.log(err)
    })
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad shop');
  }

}
