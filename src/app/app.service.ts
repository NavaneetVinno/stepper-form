import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public formData = new BehaviorSubject<any>([])

  constructor() { }

  setDatas(data:any){
    this.formData.next(data)
  }

  setStore(key:string,value:any){
    console.log(key, value);
    localStorage.setItem(key,JSON.stringify(value));
  }

  getStore(key:any):any{
    let keyData:any  = " ";
    keyData = localStorage.getItem(key)
    console.log(keyData);
    return JSON.parse(keyData)
  }

  getDatas(){
    return this.formData.asObservable()
  }
}
