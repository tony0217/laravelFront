import { Component, OnInit } from '@angular/core';


declare function init_plugins();
declare function init_validator();
declare function  start_validator();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    init_plugins();
    init_validator();
    start_validator();
  }

}
