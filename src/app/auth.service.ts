import { Injectable } from '@angular/core';
import {AUTHTOKEN, ID} from './constants'
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private username:string = null ;
  private password :string = null;
  private _isAuthenticated = new BehaviorSubject(false);

  constructor() { }


  // saveUserData(id, token) {
  //   localStorage.setItem(GC_USER_ID, id);
  //   localStorage.setItem(GC_AUTH_TOKEN, token);
  //   this.authService.setUserId(id);
  // }

  saveUserData(id: string, token: string) {

    localStorage.setItem(ID, id);
    localStorage.setItem(AUTHTOKEN, token);
    this.setusername(id);
  }

  get isAuthenticated() {
    return this._isAuthenticated.asObservable();
  }

  setusername(username: string) {
    this.username = username;

    this._isAuthenticated.next(true);
  }

  logout() {
    localStorage.removeItem(ID);
    localStorage.removeItem(AUTHTOKEN);
    this.username = null;
    this._isAuthenticated.next(false);
  }

  // 8
  autoLogin() {
    const username = localStorage.getItem(ID);
    if (username) {
      this.setusername(username);

    }
  }
}
