import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../app.service';
import { StepperComponent } from '../stepper/stepper.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  // @Input() datas!: Array<any>
  datas:any;
  constructor(private sharedService: SharedService) { 
    
  
  }

  ngOnInit(): void {
    this.sharedService.getDatas().subscribe(data => {
      console.log("form-data", data);
      this.datas = data;
    })
    console.log(this.datas);
  }
  
}
