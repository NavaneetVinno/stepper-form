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
  steps:any = 1;
  @Output() datas = new EventEmitter<any>()
  formData:any;
  stepperForm!: FormGroup
  // static stepperForm: any;
  constructor(private sharedService: SharedService, private router: Router){
    
  }

  ngOnInit(): void {
    this.stepperForm = new FormGroup({
      'personalData': new FormGroup({
        'firstName': new FormControl(null, Validators.required),
        'lastName' : new FormControl(null, Validators.required),
        'email' : new FormControl(null, [Validators.required, Validators.email]),
        'phone' : new FormControl(null, Validators.required)
      }),
      'companyData' : new FormGroup({
        'companyName': new FormControl(null, Validators.required),
        'designation' : new FormControl(null, Validators.required),
        'location' : new FormControl(null, Validators.required)
      }),
      'addressData' : new FormGroup({
        'house' : new FormControl(null, Validators.required),
        'address': new FormControl(null, Validators.required),
        'nationality': new FormControl(null, Validators.required)
      })
    })
  }

  prevBtn(){
    this.steps = this.steps - 1;
  }

  nextBtn(){
    this.steps = this.steps + 1;
  }

  submit(data: any){
    // this.formData.push(data);
    if(data){
      this.sharedService.setDatas(data)
      this.router.navigate(['/datas'])
    } else {
      alert("Form not filled");
    }
  }
  
}
