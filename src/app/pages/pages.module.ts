import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterDetailsComponent } from './register-details/register-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RecaptchaModule } from 'ng-recaptcha';




@NgModule({
  declarations: [
     PagesComponent,
     RegisterFormComponent,
     RegisterDetailsComponent,
     DashboardComponent],

     imports: [
      CommonModule,
      RouterModule,
      SharedModule,
      HttpClientModule,
      NgxPaginationModule,
      Ng2SearchPipeModule,
      FormsModule, // añadir formularios y modelos
      ReactiveFormsModule,
      RecaptchaModule

    ],

  exports:[

    PagesComponent,
    RegisterFormComponent,
    RegisterDetailsComponent,
    DashboardComponent,
  ],



})
export class PagesModule { }
