import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VodModalPage } from '../vod-modal/vod-modal.page';

@Component({
  selector: 'app-vod',
  templateUrl: './vod.component.html',
  styleUrls: ['./vod.component.scss'],
})
export class VodComponent implements OnInit {

  @Input() id:any;
  filled:boolean = false;
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}

  fill(){
    this.filled = !this.filled;
  }

  async play(){
    const modal = await this.modalCtrl.create({
      component:VodModalPage,
      componentProps: { 
        id:this.id
      }
    });
    
    await modal.present();
    
  }


  
}
