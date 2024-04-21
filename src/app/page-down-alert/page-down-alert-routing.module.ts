import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageDownAlertPage } from './page-down-alert.page';

const routes: Routes = [
  {
    path: '',
    component: PageDownAlertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageDownAlertPageRoutingModule {}
