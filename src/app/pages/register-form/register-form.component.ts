import { Component, OnInit } from '@angular/core';

import { RegisterFormService } from '../../services/pages/register-form.service';

import { Router } from '@angular/router';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';





declare function init_plugins();

declare function toastr();


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styles: []
})
export class RegisterFormComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  captchaResponse: string = '';
  formCustomer: FormGroup;
  submitted = false;

  constructor(private _RegisterFormService: RegisterFormService,
    public FormBuilder: FormBuilder,
    private router: Router) {
    this.formCustomer = this.FormBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]]
    });


  }

  get f() { return this.formCustomer.controls; }

  addCustomer(firstName: string, lastName: string, email: string) {


    this.submitted = true;
    if (this.formCustomer.invalid || this.captchaResponse == '') {
      return;
    } else {

      this._RegisterFormService.addCustomer(firstName, lastName, email).subscribe(result => {
        let res = result;
        if (res != null) {
          console.log(res);
          console.log('guardado');
          this.router.navigate(['/details']);
        } else {
          res = {};
        }
      }, error => {
        console.log(JSON.stringify(error));

      });

    }

  }

  resolved(captchaResponse: string) {
    this.captchaResponse = captchaResponse;
    console.log(`Resolved captcha with response: ${this.captchaResponse}`);
  }

  onReset() {
    this.submitted = false;
    this.formCustomer.reset();
  }
  ngOnInit() {
    init_plugins();
    toastr();

  }

}
