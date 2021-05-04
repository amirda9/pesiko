import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonRange, LoadingController, ModalController } from '@ionic/angular';
import { TracksGQL } from 'src/generated/graphql';
import { AudioService } from '../audio.service';
import { MusicPage } from '../music/music.page';

export interface Track {
  name:String;
  path:String;
  part:any;
}

@Component({
  selector: 'app-pod-page',
  templateUrl: './pod-page.page.html',
  styleUrls: ['./pod-page.page.scss'],
})
export class PodPagePage implements OnInit {

  id:any;
  image:any;
  title:string;
  @ViewChild('range',{static:false}) range: IonRange ;
  playlist=this.serv.playlist;
  progress=this.serv.progress;
  
  constructor(private trackGQL:TracksGQL,private route: ActivatedRoute, private router: Router , private modalCtrl:ModalController , public serv:AudioService,public loadingController: LoadingController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id = this.router.getCurrentNavigation().extras.state.id;
      }
    });
    // console.log(this.id);
    this.trackGQL.watch({
      ID:this.id
    }
    ).valueChanges.subscribe(
      res=>{
        // console.log(res);
        this.title = res.data.podcast.title;
        this.image = res.data.podcast.images.edges[0].node.image;
        console.log(this.image)
      }
    )
  }


  async  func(track :Track){
    const loading = await this.loadingController.create({
      message: 'در حال بارگزاری'
      });
      loading.present();
      this.serv.start(track);
      loading.dismiss()
    }
  start(track :Track){
    this.serv.start(track);
  }


  togglePlayer(pause){
    this.serv.togglePlayer(pause);
  }

  prev(){
    this.serv.prev();
  }

  seek(){
    let r =this.range.value;
    this.serv.seek(r);
  }

  updateProgress(){
    this.serv.updateprogress();
  }

  async openModal(audio){

    // let data=this.serv.track;
    // this.serv.track=this.activeTrack;
    const modal = await this.modalCtrl.create({
      component:MusicPage,
      componentProps: { 
        // costum_id:this.activeTrack,
        // text:'amir',
        // amir :{
        //   name:'amir',
        //   path:'https://mizanscene.arvanvod.com/A8LXoP4qBw/eap2aKkg95/origin_Z5vR0tk6pUuROiHXtkoGl84zj0M86XPhrZiwT4lK.mp4'
        // } 
      }
    });
    // console.log(this.serv.name)
    
    await modal.present();
    
  }
}
  

