import { Component, OnInit } from '@angular/core';
import * as lipstick from "../data/lipsticks.json";
@Component({
  selector: 'app-lipsticks',
  templateUrl: './lipsticks.component.html',
  styleUrls: ['./lipsticks.component.css']
})
export class LipsticksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  glossy:any=(lipstick as any).default;

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


