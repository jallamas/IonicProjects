import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaCategoriaModalPageRoutingModule } from './nueva-categoria-modal-routing.module';

import { NuevaCategoriaModalPage } from './nueva-categoria-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaCategoriaModalPageRoutingModule
  ],
  declarations: [NuevaCategoriaModalPage]
})
export class NuevaCategoriaModalPageModule {}
