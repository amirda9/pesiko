import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayResPageRoutingModule } from './pay-res-routing.module';

import { PayResPage } from './pay-res.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayResPageRoutingModule
  ],
  declarations: [PayResPage]
})
export class PayResPageModule {}
