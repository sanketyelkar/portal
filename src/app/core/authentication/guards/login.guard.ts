import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import decode from 'jwt-decode';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private _route: Router, private _location: Location) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    try {
      //check for token and if present or not
      if (true) {
        this._location.back();
        return false;
      }

      else return true;

    } catch (error) {
      this._route.navigate(['login']);
      return false;
    }
  }

}
