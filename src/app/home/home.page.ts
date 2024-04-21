import { Component } from '@angular/core'
import { Asset } from '../shared/models/asset.model'
import { AssetService } from '../shared/services/asset.service'
import { getRandomWidth } from '../shared/functions'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage {
  assets: Asset[] = []
  isErrorOnLoad: boolean = false
  constructor(private assetService: AssetService) { }

  skeletonWidths = [0, 1, 2].map(() => getRandomWidth(20, 70))

  ionViewWillEnter(): void {
    this.assets = []
    this.assetService.getAll().subscribe(el => {
      this.assets = el.data
    },
      err => {
        this.isErrorOnLoad=true
      }
    )
  }
}

