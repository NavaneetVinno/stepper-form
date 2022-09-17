import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { SharedService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stepper!: any[];
  boxArray !: any[];

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    read()
    const arr = []
    const data = this.sharedService.getStore("datas");
    console.log(data);
    arr.push(data);
    this.stepper = arr
    save(arr)
  }

  fetchData(){
    const data = read();

    this.boxArray = data;
    console.log(data);
  }

}

function read(){
  const json: any = localStorage.getItem("data+id");
  console.log(json);
  return JSON.parse(json)
}

function save(data:any){
  localStorage.setItem("data+id", JSON.stringify(data));
  
}
