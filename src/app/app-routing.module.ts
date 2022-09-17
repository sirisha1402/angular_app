import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the components for navigation/routing purpose
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { HandBagsComponent } from './hand-bags/hand-bags.component';
import { LipsticksComponent } from './lipsticks/lipsticks.component';
import { FootwearComponent } from './footwear/footwear.component';


//Configure the routing path for the above imported components
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cards',component:CardsComponent},
  {path:'lipsticks',component:LipsticksComponent},
  {path:'footwear',component:FootwearComponent},
  {path:'handbags',component:HandBagsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
