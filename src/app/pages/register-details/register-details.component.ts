import { Component, OnInit } from '@angular/core';

import { RegisterDetailsService } from '../../services/pages/register-details.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';


declare function init_plugins();



@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.component.html',
  styleUrls: ['./register-details.component.css']
})
export class RegisterDetailsComponent implements OnInit {


  customerList: any;
  customerLength: number;
  customerSelect: any[] = [{}];
  p: number = 1;
  searchData: string;
  firstName: string;
  lastName: string;
  email: string;
  captchaResponse: string = '';
  formCustomerUpdate: FormGroup;
  toastMs:boolean = true;
  submitted : boolean = false;

  constructor(private _RegisterDetailsService: RegisterDetailsService,
    public FormBuilder: FormBuilder,
    private router: Router) {

    this.formCustomerUpdate = this.FormBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]]
    });

  }
  get f() { return this.formCustomerUpdate.controls; }

  getCustomers(): void {
    this._RegisterDetailsService.getcustomers().subscribe(result => {
      this.customerList = result;
      this.customerLength = this.customerList.length;
      console.log('customers -->', this.customerList);
    }, error => {
      console.log(JSON.stringify(error));
    }
    );
  }

  selectCustomer(customer: any) {
    this.customerSelect = customer;
    this.firstName = this.customerSelect['firstname'];
    this.lastName = this.customerSelect['lastname'];
    this.email = this.customerSelect['email'];
    console.log(this.customerSelect);
  }



  upDateCustomer(id: number, firstName: string, lastName: string, email: string) {


    console.log(id, firstName, lastName, email);
    this.submitted = true;
    if (this.formCustomerUpdate.invalid || this.captchaResponse == '') {
      return;
    } else {

      this._RegisterDetailsService.upDateCustomer(id, firstName, lastName, email).subscribe(result => {
        let res = result;


        if (res != null) {
          console.log(res);

          console.log('guardado');
          location.reload();

        } else {
          res = {};
        }
      }, error => {
        console.log(JSON.stringify(error));

      });

    }


  }

  deleteCustomer(id: number) {

    this._RegisterDetailsService.deleteCustomer(id).subscribe(result => {
        console.log('fue eliminado');

        location.reload();

    }, error => {
      console.log(JSON.stringify(error));

    });

  }





  resolved(captchaResponse: string) {
    this.captchaResponse = captchaResponse;
    console.log(`Resolved captcha with response: ${this.captchaResponse}`);
  }

  onReset() {
    this.submitted = false;
    this.formCustomerUpdate.reset();
  }




  ngOnInit() {

    init_plugins();
    this.getCustomers();
  }



}
