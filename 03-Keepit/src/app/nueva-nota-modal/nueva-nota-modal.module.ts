import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaNotaModalPageRoutingModule } from './nueva-nota-modal-routing.module';

import { NuevaNotaModalPage } from './nueva-nota-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaNotaModalPageRoutingModule
  ],
  declarations: [NuevaNotaModalPage]
})
export class NuevaNotaModalPageModule {}
