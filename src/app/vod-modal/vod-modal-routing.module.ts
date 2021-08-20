import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VodModalPage } from './vod-modal.page';

const routes: Routes = [
  {
    path: '',
    component: VodModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VodModalPageRoutingModule {}
