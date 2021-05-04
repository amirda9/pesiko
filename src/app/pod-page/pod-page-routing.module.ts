import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PodPagePage } from './pod-page.page';

const routes: Routes = [
  {
    path: '',
    component: PodPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PodPagePageRoutingModule {}
