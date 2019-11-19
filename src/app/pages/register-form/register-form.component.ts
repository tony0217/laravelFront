import { Component, OnInit } from '@angular/core';

declare function init_validator();
declare function  start_validator();

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styles: []
})
export class RegisterFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_validator();
    start_validator();

  }

}
