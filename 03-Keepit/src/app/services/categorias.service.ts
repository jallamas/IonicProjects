import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria.interface';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { CategoriaDto } from '../models/categoria.dto';

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

  public createCategoria(categoriaDto:CategoriaDto):Promise<DocumentReference>{
    return this.db.collection<Categoria>(collectionName).add(categoriaDto.transformarDto());
  }

}
