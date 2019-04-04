import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class PublicGuardService implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private router:Router) { }
  canActivate (route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean
  {
    if(localStorage.length)
    {      
      this.router.navigate(['/private']);     
      return false;
    }
    else{   
      return true;
    }
  }
}
