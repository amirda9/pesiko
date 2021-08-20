import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vod-modal',
  templateUrl: './vod-modal.page.html',
  styleUrls: ['./vod-modal.page.scss'],
})
export class VodModalPage implements OnInit {


  
  src:string;
  @Input()id: any;
  poster:string;
  filled:boolean =false;

  constructor(private modalController:ModalController , private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    if(this.id==1){
      this.src = "https://download.samplelib.com/mp4/sample-5s.mp4";
      this.poster = "https://picsum.photos/200/300.jpg"
    }
    else if(this.id==2){
      this.src = "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4";
      this.poster = "https://picsum.photos/200/301.jpg"
    }
    else{
      this.src = "https://www.rmp-streaming.com/media/big-buck-bunny-360p.mp4";
      this.poster = "https://picsum.photos/200/302.jpg"
    }
  }



  fill(){
    this.filled = !this.filled;
  }

  closeModal(){
    this.modalController.dismiss();
  }
}
