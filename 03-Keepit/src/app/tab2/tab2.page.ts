import { Component } from '@angular/core';
import { Categoria } from '../models/categoria.interface';
import { FireStoreResponse } from '../models/firestore-response.interface';
import { CategoriasService } from '../services/categorias.service';
import { NuevaCategoriaModalPage } from '../nueva-categoria-modal/nueva-categoria-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  listadoCategorias:FireStoreResponse<Categoria>[];

  constructor(
    private categoriasService: CategoriasService,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.loadCategorias();
  }

  loadCategorias(){
    this.categoriasService.getCategorias().subscribe(resp=>{        
      this.listadoCategorias=[];
      resp.forEach((categoria:any)=>{
        this.listadoCategorias.push({
          id: categoria.payload.doc.id,
          data: categoria.payload.doc.data() as Categoria});
      });        
    });
  }

  async crearCategoriaModal() {
    const modal = await this.modalController.create({
      component: NuevaCategoriaModalPage,
      componentProps: {
        'titulo': 'Douglas'
      }
    });
    return await modal.present();
  }

}
