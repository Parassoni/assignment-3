import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/public/get-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faq: any=[];
  // public isCollapsed = false;
  constructor(private get:GetDataService) { }
  // public isCollapsed = false;
  ngOnInit() {
    this.get.faq().subscribe((data:any)=>
    {
      this.faq=data;
      console.log(ActivatedRoute.toString.name);
    })
   
  }


}
