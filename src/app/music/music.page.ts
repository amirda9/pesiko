import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRange, ModalController, NavParams } from '@ionic/angular';
import { interval, Subscription } from 'rxjs';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

  @ViewChild('range',{static:false}) range: IonRange ;
  played_sec:number=0;
  played_min : number = 0;
  subscription: Subscription;
  constructor(private navParams:NavParams , private modalController:ModalController, public serv:AudioService) {
   }

  ngOnInit() {
    // this.passedId = this.navParams.get('custom_id');
    // this.a = this.navParams.get('text');
    // this.b=this.navParams.get('costum_id');
    // console.log(this.serv.state)
    // this.sec = this.range.value
    //emit value in sequence every 10 second
const source = interval(1000);
this.subscription = source.subscribe(val => this.time());
  }

  closeModal(){
    this.modalController.dismiss();
  }

  toggle(e){
    this.serv.togglePlayer(e);
  }

  seek(){
    let r =this.range.value;
    this.serv.seek(r);
  }

  forward_fifteen(){
    let r = this.serv.player.duration()
    let t =this.range.value.valueOf();
    var y: number = +t;
    y = y*r/100;
    let newval = y + 15;
    this.serv.player.seek(newval)
    console.log(newval)
  }

  backward_fifteen(){
    let r = this.serv.player.duration()
    let t =this.range.value.valueOf();
    var y: number = +t;
    y = y*r/100 ;
    let newval = y - 15;
    this.serv.player.seek(newval)
    console.log(newval)
  }

  time(){

    // if(this.serv.state){
      let d= this.serv.player.duration();
      let t =this.range.value.valueOf();
      var y: number = +t;
      let time_sec = (y*d)/100 ;
      time_sec = Math.round(time_sec);
      this.played_sec = time_sec%60;
      this.played_min = Math.floor(time_sec /60 );
    // }
  }
}
