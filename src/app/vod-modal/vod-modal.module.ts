import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VodModalPageRoutingModule } from './vod-modal-routing.module';

import { VodModalPage } from './vod-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VodModalPageRoutingModule
  ],
  declarations: [VodModalPage]
})
export class VodModalPageModule {}
