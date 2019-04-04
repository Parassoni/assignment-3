import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DetailguardService } from './auth-guard.service';
import { PublicGuardService } from './public/public-guard.service';

// import {AuthGuardService } from './auth-guard.service'

const routes: Routes = [
  {path:'',loadChildren:'./public/public.module#PublicModule'}, 
  {path:'private',loadChildren:'./private/private.module#PrivateModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
