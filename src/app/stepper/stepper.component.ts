import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../app.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  steps: any = 1;
  num: any = 0;
  @Output() datas = new EventEmitter<any>();
  formData: any = [] 
  stepperForm!: FormGroup;
  // static stepperForm: any;
  constructor(private sharedService: SharedService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.stepperForm = new FormGroup({
      personalData: new FormGroup({
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null, Validators.required),
      }),
      companyData: new FormGroup({
        companyName: new FormControl(null, Validators.required),
        designation: new FormControl(null, Validators.required),
        location: new FormControl(null, Validators.required),
      }),
      addressData: new FormGroup({
        house: new FormControl(null, Validators.required),
        address: new FormControl(null, Validators.required),
        nationality: new FormControl(null, Validators.required),
      }),
    });
    this.stepIndicator(this.steps - 1);
   
  }

  prevBtn() {
    this.steps = this.steps - 1;
    this.stepIndicator(this.steps - 1);
  }

  nextBtn() {
    this.steps = this.steps + 1;
    this.stepIndicator(this.steps - 1);
  }

  submit(data: any) {
    // this.formData.push(data);

    this.sharedService.setDatas(data);
    this.router.navigate(['/datas']);
    // this.formData.push(data)
    // let arr = []
    const value = {
      username: data.personalData.firstName,
      company: data.companyData.companyName,
      contact: data.personalData.phone,
      location: data.companyData.location,
      nationality: data.addressData.nationality
    }
    // arr.push(value)
    // this.sharedService.setStore("form",this.formData);
    // this.num++;
    this.addStore(value)

  }

  

  stepIndicator(n: any) {
    const x = document.querySelectorAll('.step');
    console.log(x);
    for (let i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(' active', '');
    }
    x[n].className += ' active';
  }

  openTab(n: number) {
    // console.log(n);
    this.steps = n;
    this.stepIndicator(n - 1);
  }

  addStore(arr:any){
    this.sharedService.setStore("datas",arr)
  }
  
  lineColor(n:number){
    
  }
}
