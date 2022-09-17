import { Component, OnInit } from '@angular/core';
import * as Bags from "../data/hand-bags.json";
@Component({
  selector: 'app-hand-bags',
  templateUrl: './hand-bags.component.html',
  styleUrls: ['./hand-bags.component.css']
})
export class HandBagsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  handbags:any=(Bags as any).default;
  //Property for toggle effect
  productDetail=false;
  //Event to perform the toggle effect
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


