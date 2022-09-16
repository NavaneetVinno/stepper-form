import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { SharedService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
stepper: string|any[]|null|undefined;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

}
