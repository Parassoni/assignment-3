import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
// import { DetailguardService } from './auth-guard.service';
import { PublicGuardService } from './public/public-guard.service';
 import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  providers: [PublicGuardService],
  declarations: [
    AppComponent,
   
     ],
  imports: [
    BrowserModule,   
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
