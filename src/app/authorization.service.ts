import {Injectable} from '@angular/core';
import {FireBaseService} from './fire-base.service';
import { User } from './user-class';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthorizationService {
  url = '/authorization';
  private temp: User;
  private usersList: Array<User>;

  constructor(private fireBase: FireBaseService) {
    this.getUsers();
  }

  setUser(user: User) {
    this.fireBase.createData(this.url + '/' + user.name.lastName, user);
  }

  authorization(user: User) {
    this.temp = user;
  }

  isAuthorized(): boolean {
    let bool = false;
    if (!!this.temp) {
      this.usersList.forEach(item => {
        if (item.name.firstName === this.temp.name.firstName && item.password === this.temp.password && item.email === this.temp.email ) {
          bool = true;
        }
        if (bool) {
          return;
        }
      });
      return bool;
    }
  }

  getUsers() {
    this.fireBase.getDataList(this.url).subscribe(data => this.usersList = data);
  }
}
