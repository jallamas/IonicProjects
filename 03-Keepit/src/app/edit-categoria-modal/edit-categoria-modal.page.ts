import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from '../models/categoria.interface';
import { CategoriasService } from '../services/categorias.service';
import { ModalController } from '@ionic/angular';
import { FireStoreResponse } from '../models/firestore-response.interface';

@Component({
  selector: 'app-edit-categoria-modal',
  templateUrl: './edit-categoria-modal.page.html',
  styleUrls: ['./edit-categoria-modal.page.scss'],
})
export class EditCategoriaModalPage implements OnInit {
  
  @Input() id: string;
  @Input() categoria: FireStoreResponse<Categoria>;
  
  constructor(
    private categoriasService:CategoriasService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  updateCategoria() {
    this.categoriasService.updateCategoria(this.id,this.categoria.data).then(respCorrecta => {
      this.cerrarDialog();
    });
  }

  cerrarDialog() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
