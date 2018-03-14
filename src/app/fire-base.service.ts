import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { database } from 'firebase'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FireBaseService {

  constructor(private db: AngularFireDatabase) {}

  getDataList(key: string): Observable<any[]>{
    return this.db.list(key).valueChanges();
  }

  createData(key: string, data: Object) {
    console.log(data)
    database().ref(key).set(data);
  }

  deleteData(key: string) {
    database().ref(key).remove();
  }

  updateData(key: string, data: Object) {
    database().ref(key).update(data);
  }
}
