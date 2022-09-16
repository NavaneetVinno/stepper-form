import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "stepper", component: StepperComponent},
  {path: "datas", component: ResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
