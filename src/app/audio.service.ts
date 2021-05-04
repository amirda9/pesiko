import { Injectable, ViewChild } from '@angular/core';
import { Track } from './pod-page/pod-page.page';
import {Howl} from 'howler';
import {  IonRange} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  activetrack:Track;
  state=false;
  player:Howl=null;
  progress=0;

  
  playlist :Track[] =[
    {
      name : 'پادکست خواب',
      path :'https://pesiko.liara.run/mediafiles/file_example_MP3_700KB.mp3',
      part:'1'
    },
    {
      name : 'پادکست خواب',
      path :'https://mizanscene.arvanvod.com/A8LXoP4qBw/eap2aKkg95/origin_Z5vR0tk6pUuROiHXtkoGl84zj0M86XPhrZiwT4lK.mp4',
      part:'2'
    },
    {
      name : 'پادکست خواب',
      path :'https://mizanscene.arvanvod.com/A8LXoP4qBw/eap2aKkg95/origin_Z5vR0tk6pUuROiHXtkoGl84zj0M86XPhrZiwT4lK.mp4',
      part:'1'
    },
    {
      name : 'پادکست خواب',
      path :'https://mizanscene.arvanvod.com/A8LXoP4qBw/eap2aKkg95/origin_Z5vR0tk6pUuROiHXtkoGl84zj0M86XPhrZiwT4lK.mp4',
      part:'2'
    },
    {
      name : 'پادکست خواب',
      path :'https://mizanscene.arvanvod.com/A8LXoP4qBw/eap2aKkg95/origin_Z5vR0tk6pUuROiHXtkoGl84zj0M86XPhrZiwT4lK.mp4',
      part:'1'
    },
    {
      name : 'پادکست خواب',
      path :'https://mizanscene.arvanvod.com/A8LXoP4qBw/eap2aKkg95/origin_Z5vR0tk6pUuROiHXtkoGl84zj0M86XPhrZiwT4lK.mp4',
      part:'2'
    },
    {
      name : 'پادکست خواب',
      path :'https://mizanscene.arvanvod.com/A8LXoP4qBw/eap2aKkg95/origin_Z5vR0tk6pUuROiHXtkoGl84zj0M86XPhrZiwT4lK.mp4',
      part:'1'
    },
    {
      name : 'پادکست خواب',
      path :'https://mizanscene.arvanvod.com/A8LXoP4qBw/eap2aKkg95/origin_Z5vR0tk6pUuROiHXtkoGl84zj0M86XPhrZiwT4lK.mp4',
      part:'2'
    }
  ];
  
  constructor() { }


  start(track:Track){
    if(this.player){
      this.player.stop();
    }
    this.player = new Howl ({
      src:[track.path],
      html5 : true,
      onplay:() => {
        this.state = true;
        this.activetrack = track;
        this.updateprogress();
      },
      onend:() => {
        this.next();
      }
    });
    this.player.play();
    // console.log(this.serv.state)
  }
  togglePlayer(pause){
    this.state = !pause;
    if(pause){
      this.player.pause();
    }else{
      this.player.play();
    }
  }

  seek(e){
    let newvalue = e;
    let duration = this.player.duration();
    this.player.seek(duration * (newvalue / 100))
    // console.log(duration)
  }

  updateprogress(){
    let seek = this.player.seek();
    this.progress = (seek/this.player.duration()) *100 || 0 ;
    setTimeout(() => {
      this.updateprogress();
    }, 1000);
    
  }


  prev(){
    let index = this.playlist.indexOf(this.activetrack);
    if(index>0){
      this.start(this.playlist[index - 1]);
    }else{
      this.start(this.playlist[this.playlist.length - 1])
    } 
    // console.log("1");
  }

  next(){
    let index = this.playlist.indexOf(this.activetrack);
    if(index != this.playlist.length -1){
      this.start(this.playlist[index + 1]);
    }else{
      this.start(this.playlist[0])
    } 
  }


  updatetime(){
    let d = this.player.duration();
    return d;
  }


}