import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Nota } from '../models/nota.interface';
import { NotaDto } from '../models/nota.dto';

export const collectionName = 'notas';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(
    private db: AngularFirestore
  ) { }

  public getNotas() {
    return this.db.collection<Nota>(collectionName).snapshotChanges();
  }

  public createNota(notaDto:NotaDto):Promise<DocumentReference>{
    return this.db.collection<Nota>(collectionName).add(notaDto.transformarDto());
  }

}
