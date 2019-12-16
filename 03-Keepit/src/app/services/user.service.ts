import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserDto } from '../models/user.dto';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';

const collectionName = 'users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private db: AngularFirestore) { }

  createUser(uid: string, userDto: UserDto) {
    return this.db.collection(collectionName).doc(uid).set(
      userDto.transformarDto()
    );
  }
  
  getUser(uid: string): Observable<User> {
    return this.db.collection(collectionName).doc<User>(uid).valueChanges();
  }

  updateUser(uid:string){
    return this.db.collection(collectionName).doc<User>(uid);
  }
}