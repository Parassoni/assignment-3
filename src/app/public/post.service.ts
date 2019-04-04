import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {

    constructor(private http:HttpClient){}
   
    Postingdata(data:any[]) {
       console.log(data);
       
      return this.http.post("http://localhost:3000/posts",data).subscribe(); 
}

}
