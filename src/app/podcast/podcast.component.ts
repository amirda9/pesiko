import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss'],
})
export class PodcastComponent implements OnInit {

  @Input() part :any ;
  constructor() { }

  ngOnInit(){}

  

}
