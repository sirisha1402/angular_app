import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  con : Contact[] =[
    
    {
    pname: "Siri",
    pemailid:"siri4321@gmail.com",
      pnumber: 9879657456,
      paddress: "BB street Ballari",
      img:"https://cdn2.iconfinder.com/data/icons/rcons-users-color/32/support_woman-512.png"
    }
  ];
  public getContactDetails(): any{
  const conObservable = new Observable(observe =>{
    setTimeout(() => {
      observe.next(this.con);
    },1000);
  });
  return conObservable;
  }
}