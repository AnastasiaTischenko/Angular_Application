import {Injectable, OnDestroy} from '@angular/core';
import {FireBaseService} from './fire-base.service';
import { IUser } from './user-interface';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import * as _ from 'lodash';

@Injectable()
export class AuthorizationService implements OnDestroy{
  url = '/authorization';
  private temp: IUser;
  private usersList: Array<IUser>;
  private unsubscribe: Subject<void> = new Subject();

  constructor(private fireBase: FireBaseService) {
    this.getUsers();
  }

  setUser(user: IUser) {
    this.fireBase.createData(this.url + '/' + user.name.lastName, user);
  }

  authorization(user: IUser) {
    this.temp = user;
  }

  isAuthorized(): boolean {
    if (!!this.temp) {
      return _.some(this.usersList, item => item.name.firstName === this.temp.name.firstName && item.password === this.temp.password && item.email === this.temp.email)
    }
    return false;
  }

  getUsers() {
    this.fireBase.getDataList(this.url)
      .takeUntil(this.unsubscribe)
      .subscribe(data => this.usersList = data);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
