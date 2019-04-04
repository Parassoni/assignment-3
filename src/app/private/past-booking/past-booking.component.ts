import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/public/get-data.service';

@Component({
  selector: 'app-past-booking',
  templateUrl: './past-booking.component.html',
  styleUrls: ['./past-booking.component.css']
})
export class PastBookingComponent implements OnInit {
  bookings: any;

  constructor(private get:GetDataService) { }

  ngOnInit() {
    this.get.Bookings().subscribe((data:any)=>
{
  this.bookings=data;
  console.log(this.bookings[0].date);
})
  }

}
