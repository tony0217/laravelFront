import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
   NavbarComponent,
    NotFound404Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    NotFound404Component

  ]


})
export class SharedModule { }
