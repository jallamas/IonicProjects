import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria.interface';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { CategoriaDto } from '../models/categoria.dto';
import { Observable } from 'rxjs';

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

  public updateCategoria(id : string, categoria: Categoria) {
    return this.db.collection(collectionName).doc(id).update(categoria);
  }

  public deleteCategoria(idCategoriaToDelete:string){
    this.db.collection(collectionName).doc(idCategoriaToDelete).delete();
  }

  public getCategoriaById(id:string): Observable<Categoria>{
    return this.db.collection(collectionName).doc<Categoria>(id).valueChanges();
  }
}
