import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {UserService} from "./user.service";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve<any> {

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> {
    return this.userService.GetUsers().pipe(
      catchError(err => {
        return of( 'no users');
      })
    );
  }

}
