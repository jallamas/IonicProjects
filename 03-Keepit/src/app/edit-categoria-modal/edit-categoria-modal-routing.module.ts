import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCategoriaModalPage } from './edit-categoria-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EditCategoriaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCategoriaModalPageRoutingModule {}
