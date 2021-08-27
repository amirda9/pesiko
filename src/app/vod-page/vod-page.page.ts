import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { AddGQL, SerialGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-vod-page',
  templateUrl: './vod-page.page.html',
  styleUrls: ['./vod-page.page.scss'],
})
export class VodPagePage implements OnInit {


  id:any;
  title:string;
  hasBought:boolean;
  empty:boolean=false;
  episodes:any;
  prod_id:string;

  
  constructor(private route:ActivatedRoute , private router:Router,private SerialGQL:SerialGQL,private addgql:AddGQL,private alertController:AlertController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id = this.router.getCurrentNavigation().extras.state.id;
      }
    });
   }

  ngOnInit() {

    this.SerialGQL.watch({id:this.id}).valueChanges.subscribe(res=>{
      this.title = res.data.serial.title;
      this.hasBought = res.data.serial.hasBought;
      if(res.data.serial.product){
        this.prod_id = res.data.serial.product.id;
      }
      console.log(this.hasBought,res.data.serial.episodeSet.edges.length )

      if(res.data.serial.episodeSet.edges.length > 0 ){
        this.episodes = this.SerialGQL.watch({
          id:this.id,}
          ).valueChanges.pipe(map(result => result.data.serial.episodeSet.edges));   
      }
      else{
        this.empty = true;
      }

    })

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'There is no product attached.',
      buttons: ['OK']
    });
  
    await alert.present();
  }

  add(){
    if(this.prod_id == null){
      this.presentAlert()
    }
    else{
      this.addgql.mutate({
        action:"add",
        ID:this.prod_id
      }).subscribe(res=>{
        console.log(res.data.productToBasket.status);
        this.router.navigate(['/tabs/cart'])
      })
    }
    
  }


}
