import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PutService {

  constructor(private http:HttpClient) { }
  updatedata(y:any=[],data:any=[],id:any): Observable<any> 
  {
    console.log("Paras")
     const headers = new HttpHeaders()
    .set("Content-Type", "application/json");
   return this.http.patch("http://localhost:3000/posts/"+id,
    {
"firstname":y[0],
"lastname":y[1],
"address":data.address,
"phonenumber":data.phonenumber,
"email":data.email,
"field":data.field}
 , {headers})

  }
}
