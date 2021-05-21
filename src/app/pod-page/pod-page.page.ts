import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonRange, LoadingController, ModalController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { TracksGQL, TracksQuery, AddGQL} from 'src/generated/graphql';
import Observable from 'zen-observable';
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
  tracks:Observable<TracksQuery ['podcast']['trackSet']['edges']>;
  // playlist=this.serv.playlist;
  progress=this.serv.progress;
  hasBought:boolean;
  prod_id:string;
  
  constructor(private trackGQL:TracksGQL,private route: ActivatedRoute, private router: Router , private modalCtrl:ModalController , public serv:AudioService,public loadingController: LoadingController , private addgql:AddGQL) {

    // this.trackGQL.watch({
    //   ID:"UG9kY2FzdE5vZGU6MQ==",
    // }).valueChanges.subscribe(res=>{
    //   console.log(res);
    //   // this.tracks = res.data.podcast.trackSet.edges;
    // });

   }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id = this.router.getCurrentNavigation().extras.state.id;
      }
    });
    // console.log(this.id);
    this.trackGQL.watch({
      ID:this.id,}).valueChanges.subscribe(res=>{
        this.hasBought = res.data.podcast.hasBought;
        this.prod_id = res.data.podcast.product.id;
      })
    this.tracks = this.trackGQL.watch({
      ID:this.id,}
      ).valueChanges.pipe(map(result => result.data.podcast.trackSet.edges));


    // console.log(this.id);

  }


  async  func(e){
    const loading = await this.loadingController.create({
      message: 'در حال بارگزاری'
      });
      loading.present();
      this.serv.start(e);
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


  add(){
    // console.log(this.prod_id);
    this.addgql.mutate({
      action:"add",
      ID:this.prod_id
    }).subscribe(res=>{
      console.log(res.data.productToBasket.status);
    })
  }
}
  

