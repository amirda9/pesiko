import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import {BasketGQL,BasketQuery,AddGQL,PayGQL} from '../../generated/graphql';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  token:string;
  amount:number;
  status:boolean;
  public path:any;
  products:any;
  empty:boolean;
  constructor(private basketgql:BasketGQL,private addgql:AddGQL , private paygql:PayGQL , private loadingController:LoadingController) {
    this.basketgql.watch().valueChanges.subscribe(res=>{
      if(res.data.currentBasket){
        this.empty = false;
        this.amount=res.data.currentBasket.totalAmount;
      this.status=res.data.currentBasket.isPaid;
      this.products = res.data.currentBasket.products.edges;
      }
      else{
        console.log("empty");
        this.empty = true;
      }
    })
   }

  ngOnInit() {
  }

  async pay(){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
      });
      loading.present();
    this.paygql.mutate().subscribe(res=>{
      this.token = res.data.pay.transaction.token;
      console.log(this.token);
      loading.dismiss();

      this.path="https://pay.ir/pg/" + this.token;
          window.location.href = this.path;
    });

    
  }

  remove(e){
    this.addgql.mutate({
      action:"remove",
      ID:e
    }).subscribe(res=>{
      console.log(res.data.productToBasket.status);
    })
  }
}
