import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import {PostService} from '../post.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegistraionForm:FormGroup;
   constructor(private fb:FormBuilder,private http:HttpClient,private post:PostService,private router :Router) { }

  ngOnInit() {
   
    this.RegistraionForm=this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phonenumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      address:['',Validators.required],
     password:['',Validators.required],
      confirmpassword:['',Validators.required],
      field:['']
    })
   if(localStorage.length)
 {    this.router.navigate(["/private"]);      
     }
    
  
    // localStorage.clear();
   
  }
  get function()
  {
return this.RegistraionForm.controls;
  }
  submit()
  {
   if(this.RegistraionForm.value.password!=this.RegistraionForm.value.confirmpassword)
   {
alert("Confirm Password dont match");
   }
   else
   {    
    this.post.Postingdata(this.RegistraionForm.value);
    alert("Now You can Login");
    this.router.navigate(["/login"]);
   }
  
}

}
