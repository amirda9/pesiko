import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VodPagePageRoutingModule } from './vod-page-routing.module';

import { VodPagePage } from './vod-page.page';
import { SharedModuleModule } from '../sharedmodule.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VodPagePageRoutingModule,
    SharedModuleModule
  ],
  declarations: [VodPagePage]
})
export class VodPagePageModule {}
