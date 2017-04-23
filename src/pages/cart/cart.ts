import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { ShopService } from "../../providers/shop-provider"


@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class Cart {

  currentCart:any

  carts:Array<any>= []

  object:any={
    objectId:"",
    productName:"",
    price:"",
    amount:""
  }

  constructor(public navCtrl: NavController, public alertCtrl:AlertController, public navParams: NavParams, public shopServ: ShopService, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cart');
  }

  backToShop()
  {
    this.viewCtrl.dismiss()
  }

  deleteFromCart(cart)
  {
    //console.log("4444")
    let opts = {
      title: '删除产品',
      message: `删除当前已买产品 ${cart.productName} 吗?`,
      buttons: [
        {
          text: '取消',
          handler: () => {
            //console.log('Disagree clicked');
            return
          }
        },
        {
          text: '确认',
          handler: () => {
                if(cart&&cart.objectId){
                  /*
                  this.shopServ.deleteClassById("Product",cart.objectId).then(data=>{
                    this.shopServ.carts.filter((item,index)=>{
                      if(item.objectId == cart.objectId){
                        this.shopServ.carts.splice(index,1)
                      }
                      })
                  })*/
                    let updatePrd:any={
                      amount:0
                    }

                    this.shopServ.updateClass("ProductSales",cart.objectId,updatePrd).then(data=>{
                      this.shopServ.products.find(p=>p.objectId==cart.objectId).amount=0
                      this.shopServ.carts.splice(this.shopServ.carts.findIndex(p=>p.objectId==cart.objectId),1)
  
                      this.shopServ.currentCartCount=0
                      this.shopServ.products.filter(p=>p.amount>0).forEach(data=>{
                              this.shopServ.currentCartCount+=data.amount
                            })
                    }).catch(err=>{
                    console.log(err)
                  })
                }
          }
        }
      ]
    }
    let deleteConfirm = this.alertCtrl.create(opts)
    deleteConfirm.present()
  }

  refreshData(refresher){
  this.shopServ.findClasses("Cart").then(data=>{
        if(data&&data.json().results){
          this.shopServ.carts = data.json().results
           refresher.complete();
        }
    })
  }






}
