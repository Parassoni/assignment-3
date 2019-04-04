import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  header: string;
  ngOnInit() {       
    this.Name=localStorage.getItem("fullname");
     }
Name:any;
info:any=[];
  name: string;
  constructor(private router:Router) { 
  router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange() )}
  
 
  handleRouteChange = () => {
    if (this.router.url.includes('profile')) {
     this.header = "PROFILE";
    }
    if (this.router.url.includes('contact')) {
      this.header = "Contacts";
     }
     if (this.router.url.includes('mybooking')) {
      this.header = "MY BOOKINGS";
     }
     if (this.router.url.includes('faq')) {
      this.header = "FAQs";
     }
  }
  logout()
  { alert("You Want To Logout")
    localStorage.clear();
   
    console.log("logout");
   this.router.navigate(['/logout']);
     }

    }