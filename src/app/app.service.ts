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

  getDatas(){
    return this.formData.asObservable()
  }
}
