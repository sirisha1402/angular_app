import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  name="JOHN"
   //Array - *ngFor
   //key:value
   products:any[]=[
    {
      "productname":"kids Dress"
    },
    {
      "productname":"kids Toys"
    },
    {
      "productname":"Laptop"
    },
    {
      "productname":"Mobile"
    },
    {
      "productname":"Head phones"
    },
    {
      "productname":"Footwear"
    },
    {
      "productname":"Washing machine"
    }
   ]
   //event to hide products
   isVisible:boolean=true;
   hide_products()
   {
    this.isVisible=!this.isVisible;
   }
   //*ngSwitch
   product = 'Dress'
   //property errorcolor for style binding using ternary operator
   errorcolor:string='red'
   //array for style binding with ternary operator withngswitch

   ProductDetails:any[]=
   [{
    "pid":"100",
    "pname":"Kids toys",
    "status":"Active",
    "color":"green"
   },
   {
    "pid":"101",
    "pname":"Kids Dress",
    "status":"InActive",
    "color":"red"
   },
   {
    "pid":"102",
    "pname":"Kids Books",
    "status":"Out of stock",
    "color":"yellow"
    
   },
   {
    "pid":"104",
    "pname":"Kids footwear",
    "status":"Active",
    "color":"green"
   },{
    "pid":"105",
    "pname":"Laptop",
    "status":"Active",
    "color":"green"
   },
   {
    "pid":"106",
    "pname":"Headphones",
    "status":"InActive",
    "color":"red"
   },
   {
    "pid":"107",
    "pname":"Shoes",
    "status":"out of stock",
    "color":"yellow"
   }
  ]
  //style binding using a function
  //getcolor()
 // {
  // return 'blue';
  //}
  //ngclass
  ngOnInit(): void {
  }
}
