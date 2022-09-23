import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the components for navigation/routing purpose
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { HandBagsComponent } from './hand-bags/hand-bags.component';
import { LipsticksComponent } from './lipsticks/lipsticks.component';
import { FootwearComponent } from './footwear/footwear.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { SalesComponent } from './sales/sales.component';
import { LoginComponent } from './login/login.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { AmazondealsComponent } from './deals/amazondeals/amazondeals.component';
//Configure the routing path for the above imported components
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'cards',component:CardsComponent},
  {path:'lipsticks',component:LipsticksComponent},
  {path:'footwear',component:FootwearComponent},
  {path:'handbags',component:HandBagsComponent},
  {path:'allproducts',component:AllproductsComponent},
  {path:'contact', component:ContactComponent},
  {path:'register',component:RegisterComponent},
  {path:'prod_details',component:ProductdetailsComponent},
  {path:'sales',component:SalesComponent},
  {path:'cartitem',component:CartItemsComponent},
  {path:'deals',component:AmazondealsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
