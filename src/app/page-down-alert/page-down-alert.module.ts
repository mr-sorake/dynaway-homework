import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageDownAlertPageRoutingModule } from './page-down-alert-routing.module';

import { PageDownAlertPage } from './page-down-alert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageDownAlertPageRoutingModule
  ],
  declarations: [PageDownAlertPage],
  exports: [PageDownAlertPage]
})
export class PageDownAlertPageModule {}
