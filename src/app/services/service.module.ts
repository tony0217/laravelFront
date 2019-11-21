import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RegisterDetailsService,RegisterFormService } from './service.index';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[RegisterDetailsService,RegisterFormService ]
})
export class ServiceModule { }
