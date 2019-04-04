import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PublicGuardService } from './public-guard.service';


const routes: Routes = [
  {path:'',component:RegisterComponent,canActivate:[PublicGuardService]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
,
// declarations: [
//   RegisterComponent,
//   LoginComponent

// ]
})
export class PublicRoutingModule { }
