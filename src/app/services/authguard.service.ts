
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonApis } from '../commonClass/commonApi';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  constructor(private routes : Router,public coomonApi:CommonApis ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return new Observable<boolean>( observer => {
          if(localStorage.getItem('token')!= null){
        return observer.next(true);
          }
          else
          {
            // alert('authGuard')
            this.routes.navigate(['']);
            // return false;
            return observer.next(false);
          }
        })
        
  }
}
