import { Component, OnInit } from '@angular/core';
import * as HB from "../hand-bags.json";

@Component({
  selector: 'app-handbagdeals',
  templateUrl: './handbagdeals.component.html',
  styleUrls: ['./handbagdeals.component.css']
})
export class HandbagdealsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  handbags:any=(HB as any).default;
  productDetail=false;
  
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }
  
  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa-solid fa-arrow-up';
    }
    else{
      content='fa-solid fa-arrow-down';
    }
    return content;
  }
}
