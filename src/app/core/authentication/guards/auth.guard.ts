// import { Injectable } from '@angular/core';
// import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// // import decode from 'jwt-decode';
// import { AuthService } from './auth.service';
// import { UserService } from '../services/user.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
//   constructor(private _auth: AuthService, private _route: Router, private userService: UserService) {
//     this.userService.currentUser.subscribe(permissions => {
//       // 
//     });
//   }
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): boolean {
//     try {
//       const expectedPermissions = next.data.permissions;
//       var permissionFound: boolean = false;
//       var authorizedPermissions: any = [];
//       this.userService.currentUser.subscribe(permissions => {
//         authorizedPermissions = permissions;
//       });
//       const token = this._auth.getToken();
//       if (token && !this._auth.isTokenExpired()) {
//         for (const checkPermission of expectedPermissions) {
//           if (!permissionFound)
//             permissionFound = authorizedPermissions.includes(checkPermission);
//         }
//         if (permissionFound)
//           return true;
//         else {
//           this._route.navigate(['notauthorized']);
//           return false;
//         }
//       }
//       else {
//         this._auth.logout();
//         return false;
//       }
//     } catch (error) {
//       this._route.navigate(['login']);
//       return false;
//     }
//   }
//   canActivateChild(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): boolean {
//     if (!this._auth.isTokenExpired())
//       return true;
//   }
//   canLoad(
//     route: Route,
//     segments: UrlSegment[]): boolean {
//     if (!this._auth.isTokenExpired())
//       return true;
//   }
// }