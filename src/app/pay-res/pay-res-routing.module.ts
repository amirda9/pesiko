import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayResPage } from './pay-res.page';

const routes: Routes = [
  {
    path: '',
    component: PayResPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayResPageRoutingModule {}
