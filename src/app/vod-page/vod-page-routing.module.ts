import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VodPagePage } from './vod-page.page';

const routes: Routes = [
  {
    path: '',
    component: VodPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VodPagePageRoutingModule {}
