import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterDetailsComponent } from './register-details/register-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
     PagesComponent,
     RegisterFormComponent,
     RegisterDetailsComponent,
     DashboardComponent],

  exports:[

    PagesComponent,
    RegisterFormComponent,
    RegisterDetailsComponent,
    DashboardComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    SharedModule

  ]

})
export class PagesModule { }
