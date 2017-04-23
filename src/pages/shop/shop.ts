import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { ShopService } from "../../providers/shop-provider"

import { Cart } from "../cart/cart"


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

  //products:Array<any>

  //currentCartCount:any
  currentProduct:any

  cartPage:any=Cart

  constructor(public navCtrl: NavController, public modalCtrl:ModalController, public navParams: NavParams,private shopServ:ShopService,public viewCtrl:ViewController) {

    this.findProducts()
  }

  addCount(id){
    this.shopServ.products.find(p=>p.objectId==id).amount+=1
  }

  minusCount(id){
    this.shopServ.products.find(p=>p.objectId==id).amount<=0? 0:this.shopServ.products.find(p=>p.objectId==id).amount-=1
  }

  findProducts(){
      this.shopServ.findClasses("ProductSales").then(
      data=>{
        if(data&&data.json().results){
          this.shopServ.products = data.json().results
          
          this.shopServ.currentCartCount = 0 //this.products.filter(p=>p.amount>0).length
          
          this.shopServ.carts.splice(0,this.shopServ.carts.length)
          this.shopServ.products.filter(p=>p.amount>0).forEach(data=>{

            this.shopServ.currentCartCount+=data.amount
            this.shopServ.carts.push(data)
          })
        }
    })
  }

  addToCart(prd?)
  {
    /*
    this.shopServ.saveClass("Cart",cart).then(data=>{
      cart.objectId = data.json().objectId  
      this.shopServ.carts.push(cart)
      }).catch(err=>{
      console.log(err)
    })*/

    if(prd){
        
        let updatePrd:any={
          amount:0
        }

        updatePrd.amount=prd.amount

        this.shopServ.updateClass("ProductSales",prd.objectId,updatePrd).then(data=>{
          //this.shopServ.products["amount"]=prd.amount
        }).catch(err=>{
        console.log(err)
      })
    }

    if(!this.shopServ.carts.find(p=>p.objectId==prd.objectId))
    {
      this.shopServ.carts.push(prd)
    }
    else
    {
      this.shopServ.carts.find(p=>p.objectId==prd.objectId).amount=prd.amount
    }

    this.getAmount()
  }

  goToCartPage()
  {
    //console.log("2222")
    let opts:any = {}
    let currentCartPage = this.modalCtrl.create(this.cartPage,opts)
    
    currentCartPage.present()
  }

  getAmount()
  {
    this.shopServ.currentCartCount=0
    this.shopServ.products.filter(p=>p.amount>0).forEach(data=>{
            this.shopServ.currentCartCount+=data.amount
          })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad shop');
  }

}
