import { Component, OnInit } from '@angular/core';

// importar funciones que no sean de angular eje:jquery
declare function init_plugins();

@Component({
  selector: 'app-not-found404',
  templateUrl: './not-found404.component.html',
  styles: []
})
export class NotFound404Component implements OnInit {

  constructor() { }

  ngOnInit() {

    init_plugins();
  }

}
