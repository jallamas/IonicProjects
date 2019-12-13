import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCategoriaModalPageRoutingModule } from './edit-categoria-modal-routing.module';

import { EditCategoriaModalPage } from './edit-categoria-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCategoriaModalPageRoutingModule
  ],
  declarations: [EditCategoriaModalPage]
})
export class EditCategoriaModalPageModule {}
