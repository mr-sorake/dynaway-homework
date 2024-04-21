import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { FormsModule } from '@angular/forms'
import { HomePage } from './home.page'

import { HomePageRoutingModule } from './home-routing.module'
import { AssetCardComponent } from './asset-card/asset-card.component'
import { PageDownAlertPageModule } from '../page-down-alert/page-down-alert.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    PageDownAlertPageModule
  ],
  declarations: [HomePage, AssetCardComponent]
})
export class HomePageModule {}
