import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import {GetDataService} from '../get-data.service'
import { Router} from '@angular/router';
import { VALID } from '@angular/forms/src/model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
LoginForm:FormGroup;
name:string;
  constructor(private Get:GetDataService,private fb:FormBuilder,private http:HttpClient,public router:Router) { }
info:any;
  ngOnInit() {
   
    this.LoginForm=this.fb.group({
      username:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
        })
       }
check(){ 
console.log(this.LoginForm.value.username);
this.Get.Getdata(this.LoginForm.value.username).subscribe
((data:any)=>
{
 if(Object.keys(data).length)
 { 
console.log(data);

  this.name=data[0].firstname+" "+data[0].lastname;
  localStorage.setItem("fullname",this.name);
  localStorage.setItem("firstname",data[0].firstname);
  localStorage.setItem("authenticate","true");  
  this.router.navigate(['/private']);    
}
 else{
    alert("You are not registred");
  }
})
}

}
