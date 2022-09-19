import { NgModule } from '@angular/core';import { AllproductsComponent } from './allproducts/allproducts.component';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { LipsticksComponent } from './lipsticks/lipsticks.component';
import { FootwearComponent } from './footwear/footwear.component';
import { HandBagsComponent } from './hand-bags/hand-bags.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { HandbagdealsComponent } from './hand-bags/handbagdeals/handbagdeals.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HomeComponent,
    NavComponent,
    SearchComponent,
    LipsticksComponent,
    FootwearComponent,
    HandBagsComponent,
    AllproductsComponent,
    CounterComponent,
    CounterchildComponent,
    AdvertisementComponent,
    HandbagdealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
