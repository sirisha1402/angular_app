import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counterchild',
  templateUrl: './counterchild.component.html',
  styleUrls: ['./counterchild.component.css']
})
export class CounterchildComponent implements OnInit {
//counter property
@Input() counterValue: number =1;
countLessThenOne=true;

@Output() countEmmitter =new EventEmitter(); 
@Output() quantityEmitter = new EventEmitter();
PostData(){
this.countEmmitter.emit(this.counterValue);
this.quantityEmitter.emit(this.counterValue);
}
//increment and decrement 
//quantity
decrement(){
  if(this.counterValue==1)
  {
    this.countLessThenOne=false;
  }
  else{
    this.countLessThenOne=true;
    this.counterValue--;
  }
  this.PostData();
}

increment()
{
  this.counterValue++;
  this.countLessThenOne=true;
  this.PostData();
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
