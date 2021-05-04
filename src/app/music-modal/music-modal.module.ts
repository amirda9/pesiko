import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicModalPageRoutingModule } from './music-modal-routing.module';

import { MusicModalPage } from './music-modal.page';
import { AudioService } from '../audio.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicModalPageRoutingModule,
  ],
  providers: [
    AudioService
],
  declarations: [MusicModalPage]
})
export class MusicModalPageModule {}
