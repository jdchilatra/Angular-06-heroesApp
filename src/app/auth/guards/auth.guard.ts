import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanMatch, CanActivate {
  constructor() { }

  canMatch(route: Route, segments: UrlSegment[])
    : Observable<boolean> | boolean
  {
    console.log('canMatch')
    console.log({route,segments});
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    :Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    console.log('canActivate')
    console.log({route,state})
    return false;
  }
}
