import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private route: Router, private matdialog: MatDialog) {}

  setSessionToken(token: any, userInfo: any) {
    console.log('nikita', userInfo);

    sessionStorage.setItem('secretToken', token);
    sessionStorage.setItem('userName', window.btoa(userInfo.username));
    sessionStorage.setItem('password', window.btoa(userInfo.password));
  }

  getToken() {
    return sessionStorage.getItem('secretToken');
  }

  getUserInfo() {
    return sessionStorage.getItem('userInfo');
  }

  logout() {
    sessionStorage.removeItem('secretToken');
    sessionStorage.removeItem('userName');
  }

  isloggedIn() {
    if (this.getToken() !== null) return true;
    else return false;
  }
}
