import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Nota } from '../models/nota.interface';

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
}
