import { Component, OnInit } from '@angular/core';
import { CategoriaDto } from '../models/categoria.dto';
import { ModalController } from '@ionic/angular';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'app-nueva-categoria-modal',
  templateUrl: './nueva-categoria-modal.page.html',
  styleUrls: ['./nueva-categoria-modal.page.scss'],
})
export class NuevaCategoriaModalPage implements OnInit {

  categoriaDto : CategoriaDto;

  constructor(
    private categoriasService: CategoriasService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.categoriaDto=new CategoriaDto('');
  }

  addCategoria(){
    this.categoriasService.createCategoria(this.categoriaDto).then(resp=>{
      this.cerrar();
    });
  }

  cerrar() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
