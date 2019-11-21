import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFound404Component } from './shared/not-found404/not-found404.component';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterDetailsComponent } from './pages/register-details/register-details.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';


const routes: Routes = [

  {path:'',component: PagesComponent,

  children:[
    {path:'dashboard', component: DashboardComponent},
    {path:'details', component: RegisterDetailsComponent},
    {path:'form', component: RegisterFormComponent},


    {path:'',redirectTo:'/details' , pathMatch: 'full'},
    {path:'**', component: NotFound404Component},
  ]
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
