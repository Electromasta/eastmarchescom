import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { Subject, Subscription } from 'rxjs';

import { Injectable } from '@angular/core'
import { TestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userInfo = new Subject<any>();
  public _userInfo = this.userInfo.asObservable();
  constructor() {}

  setUserInfo(message) {
    this.userInfo.next(message);
  }

  clearUserInfo() {
    this.userInfo.next();
  }

  getUserInfo(): Observable<any> {
    return this.userInfo.asObservable();
  }
}
