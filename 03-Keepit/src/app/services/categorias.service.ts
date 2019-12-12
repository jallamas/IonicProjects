import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria.interface';
import { AngularFirestore } from '@angular/fire/firestore';

export const collectionName = 'categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(
    private db: AngularFirestore
  ) { }

  public getCategorias() {
    return this.db.collection<Categoria>(collectionName).snapshotChanges();
  }
}
