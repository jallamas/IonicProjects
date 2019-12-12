import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaNotaModalPage } from './nueva-nota-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaNotaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaNotaModalPageRoutingModule {}
