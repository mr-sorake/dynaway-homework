import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'asset/:id',
    loadChildren: () => import('./asset-detail/asset-detail.module').then((m) => m.AssetDetailPageModule),
  },
  // {
  //   path: 'page-down-alert',
  //   loadChildren: () => import('./page-down-alert/page-down-alert.module').then( m => m.PageDownAlertPageModule)
  // }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
