import { Component, OnInit } from '@angular/core';
import { NotasService } from '../services/notas.service';
import { Nota } from '../models/nota.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { FireStoreResponse } from '../models/firestore-response.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit{
  
  listadoNotas:FireStoreResponse<Nota>[];

  constructor(
    private notasService: NotasService
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
}
