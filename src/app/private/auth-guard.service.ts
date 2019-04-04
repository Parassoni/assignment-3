import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class DetailguardService implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private router:Router) { }
  canActivate (route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean
  {
    if(localStorage.length!=null)
    {      
      return true;
    }
    else{
      alert("Authentication Required")
      this.router.navigate(['/login']);
      return false;
    }
  }
}
