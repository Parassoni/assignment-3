import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GetDataService } from 'src/app/public/get-data.service';
import { PutService } from '../put.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  UpdateForm:FormGroup
  info:any=[];
Name:string;
x:any;
constructor(private Get:GetDataService,private fb:FormBuilder,private put:PutService,private router:Router) { }

  ngOnInit() {  
    localStorage.setItem("module","MY PROFILE");
 this.Get.Getdata(localStorage.getItem("firstname")).subscribe((data:any)=>
 { this.info=data[0]; 
  localStorage.setItem("id",this.info.id);
  this.Name=localStorage.getItem("fullname");
  this.UpdateForm.get("fullname").setValue(this.Name);
    this.UpdateForm.patchValue({    
    email: this.info.email,
    phonenumber:this.info.phonenumber,
    address:this.info.address,
    field:this.info.field
 })
 
 })
   this.UpdateForm=this.fb.group({
  fullname:['',Validators.required],
      email:['',Validators.required],
      phonenumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      address:['',Validators.required],
      field:['']
    });  
   
  }  
  update() {
    
    this.x = this.UpdateForm.value.fullname.split(" ")
    console.log(this.x[0]);
    localStorage.setItem("fullname",this.UpdateForm.value.fullname);

   this.put.updatedata(this.x,this.UpdateForm.value,localStorage.getItem("id")).subscribe(()=>
   {
    alert("UPDATED SUCCESSFULLY");
    this.router.navigate(['/navbar']);
    location.reload();
   }
   );
} 

}
