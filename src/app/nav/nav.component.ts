import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CartService} from '../cart.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService:UserService,private cartSvc:CartService) { }
  auth:boolean=false;
  //add to cart
  cartCount: number=0;
  //STRING INTERPOLATION
  title = 'amazon';
  //PROPERTY BINDING
  public logo="https://www.bing.com/th?id=OIP.QDgivdKPRSgdQhTml5g8ngHaE9&w=305&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2";
  //EVENT BINDING
  //onSearch()
  //{
    //alert("Will contact shortly");
  //}

  //Accessing the Search Component
  //Property
  productentered: string=' '  //Laptop

  //Event
  search_product(product_name:string):void{ //Laptop
    if(!product_name)
    {
      this.productentered=' ';
    }
    this.productentered=product_name; //Laptop
    console.log(product_name)
  }

  ngOnInit(): void {
    this.authService.authSubject.subscribe(
      data => 
      {
        console.log('auth inside nav component: ' + data);
        this.auth = data;
      }
    );
    this.cartSvc.getCartItems().subscribe (
      (response) =>
      {
        this.cartCount=response.length;
        console.log(this.cartCount);
      }
    )
    this.cartSvc.countSubject.subscribe (     
      (response) =>
       {        
        this.cartCount=response;
        console.log(this.cartCount);
       }
     ) 
  }

}