import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'nueva-nota-modal',
    loadChildren: () => import('./nueva-nota-modal/nueva-nota-modal.module').then( m => m.NuevaNotaModalPageModule)
  },  {
    path: 'nueva-categoria-modal',
    loadChildren: () => import('./nueva-categoria-modal/nueva-categoria-modal.module').then( m => m.NuevaCategoriaModalPageModule)
  },
  {
    path: 'edit-categoria-modal',
    loadChildren: () => import('./edit-categoria-modal/edit-categoria-modal.module').then( m => m.EditCategoriaModalPageModule)
  },
  {
    path: 'signin-facebook',
    loadChildren: () => import('./signin-facebook/signin-facebook.module').then( m => m.SigninFacebookPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
