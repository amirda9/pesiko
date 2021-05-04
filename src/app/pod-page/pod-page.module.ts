import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PodPagePageRoutingModule } from './pod-page-routing.module';

import { PodPagePage } from './pod-page.page';
import { SharedModuleModule } from '../sharedmodule.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PodPagePageRoutingModule,
    SharedModuleModule
  ],
  declarations: [PodPagePage]
})
export class PodPagePageModule {}
