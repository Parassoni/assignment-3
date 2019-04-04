import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ProfileComponent } from './profile/profile.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpcomingBookingComponent } from './upcoming-booking/upcoming-booking.component';
import { PastBookingComponent } from './past-booking/past-booking.component';
import { DetailguardService } from './auth-guard.service';
// import { ChildrenguardService } from './children-guard.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({  providers:[DetailguardService],
  declarations:[FaqComponent,NavbarComponent, BookingsComponent, ProfileComponent, FaqComponent, ContactComponent, UpcomingBookingComponent, PastBookingComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]

})
export class PrivateModule { 
  
}
