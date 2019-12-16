import { Component, OnInit, Input } from '@angular/core';
import { NotasService } from '../services/notas.service';
import { Nota } from '../models/nota.interface';
import { FireStoreResponse } from '../models/firestore-response.interface';
import { NuevaNotaModalPage } from '../nueva-nota-modal/nueva-nota-modal.page';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit{
  
  listadoNotas:FireStoreResponse<Nota>[];

  @Input() titulo: string;
  @Input() categoria: string;
  @Input() descripcion: string;
  
  constructor(
    private notasService: NotasService,
    public modalController: ModalController,
    private authService : AuthService,
    private router: Router
    ) {}

  ngOnInit() {
      this.loadNotas();
    }
  
  loadNotas(){
    this.notasService.getNotas().subscribe(resp=>{        
      this.listadoNotas=[];
      resp.forEach((nota:any)=>{
        this.listadoNotas.push({
          id: nota.payload.doc.id,
          data: nota.payload.doc.data() as Nota});
      });        
    });
  }

  async crearNotaModal() {
    const modal = await this.modalController.create({
      component: NuevaNotaModalPage,
      componentProps: {
        'titulo': 'Douglas',
        'categoria': 'Adams',
        'descripcion': 'N'
      }
    });
    return await modal.present();
  }

  logOut(){
    this.authService.facebookLogout().then(resp => {
      this.router.navigate(['/signin-facebook']);
    });

  }
}
