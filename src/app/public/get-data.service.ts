import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {
// myobservable:any=Observable;
  constructor(private http:HttpClient) { }
   Getdata(username:any)
  {
  return this.http.get('http://localhost:3000/posts?q='+username);
       }
  Bookings()
  {
    return this.http.get('http://localhost:3000/bookings')
  }
  faq()
  {
    return this.http.get('http://localhost:3000/faqs')
  }
}
