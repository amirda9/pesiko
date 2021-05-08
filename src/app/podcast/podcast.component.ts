import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss'],
})
export class PodcastComponent implements OnInit {

  @Input() track :any ;
  @Input() Name:string;
  constructor(public serv:AudioService) { }

  ngOnInit(){
  }

  
  play(){
    this.serv.start(this.track);
    // console.log("here");
  }

}
