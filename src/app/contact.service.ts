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
      pname: "Sam",
      pemailid:"sam1234@gmail.com",
      pnumber: 9087654321,
      paddress: "BITM Ballari"
    },
    {
    pname: "Siri",
    pemailid:"siri4321@gmail.com",
      pnumber: 9879657456,
      paddress: "BB street Ballari"
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