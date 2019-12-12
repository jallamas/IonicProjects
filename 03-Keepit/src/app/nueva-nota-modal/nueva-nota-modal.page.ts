import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { NotaDto } from '../models/Nota.dto';
import { NotasService } from '../services/notas.service';

@Component({
  selector: 'app-nueva-nota-modal',
  templateUrl: './nueva-nota-modal.page.html',
  styleUrls: ['./nueva-nota-modal.page.scss'],
})
export class NuevaNotaModalPage implements OnInit {
  
  notaDto : NotaDto;
  
  constructor(
    private notasService: NotasService,
    private modalController: ModalController
    ) { }

  ngOnInit() {
    this.notaDto=new NotaDto('','','');
  }

  addNota(){
    this.notasService.createNota(this.notaDto).then(resp=>{
      this.cerrar();
    });
  }

  cerrar() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
