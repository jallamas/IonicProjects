import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { NotaDto } from '../models/nota.dto';
import { NotasService } from '../services/notas.service';
import { CategoriasService } from '../services/categorias.service';
import { FireStoreResponse } from '../models/firestore-response.interface';
import { Categoria } from '../models/categoria.interface';

@Component({
  selector: 'app-nueva-nota-modal',
  templateUrl: './nueva-nota-modal.page.html',
  styleUrls: ['./nueva-nota-modal.page.scss'],
})
export class NuevaNotaModalPage implements OnInit {
  
  notaDto : NotaDto;
  categorias: FireStoreResponse<Categoria>[] = [];
  
  constructor(
    private notasService: NotasService,
    private categoriasService:CategoriasService,
    private modalController: ModalController
    ) { }

  ngOnInit() {
    this.notaDto=new NotaDto('','','','',localStorage.getItem('uid'));
    this.loadCategorias();
  }

  addNota(){
    this.notasService.createNota(this.notaDto).then(resp=>{
      console.log(this.notaDto);
      this.categorias=[];      
      this.cerrar();
    });
  }

  cerrar() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  loadCategorias(){
    const myCategory = this.categoriasService.getCategorias().subscribe(resp=>{
      myCategory.unsubscribe();
      resp.forEach((categoria:any)=>{
        this.categorias.push({
          id: categoria.payload.doc.id,
          data: categoria.payload.doc.data() as Categoria});
      });
    });
  }
}
