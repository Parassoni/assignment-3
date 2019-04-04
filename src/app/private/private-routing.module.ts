import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { ProfileComponent } from './profile/profile.component';
import { BookingsComponent } from './bookings/bookings.component';
import { UpcomingBookingComponent } from './upcoming-booking/upcoming-booking.component';
import { PastBookingComponent } from './past-booking/past-booking.component';
import { DetailguardService } from './auth-guard.service';
// import { ChildrenguardService } from './children-guard.service';
// import { AuthGuard } from './authguard.guard';

const routes: Routes = [
  {path:'',component:NavbarComponent ,
   canActivate: [DetailguardService],
  children:[
  {path:'mybooking',component:BookingsComponent,
  children:[
    {path:'',component:UpcomingBookingComponent},
  {path:'past',component:PastBookingComponent},
{path:'upcoming',component:UpcomingBookingComponent}
]},
  {path:'',component:ProfileComponent},
  {path:'profile',component:ProfileComponent},  
  {path:'faq',component:FaqComponent},
  {path:'contact',component:ContactComponent},
  {path:'logout', redirectTo: '/login', pathMatch: 'full'}
  ]}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
