import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterFormService {
  // path
  urlPrincipal = 'http://localhost/api-laravel/apiRest/public/api/';

  constructor(private httpClient: HttpClient) { }
  // create customer
  addCustomer(firstName: string, lastName: string, email: string ): Observable<any> {
    console.log(firstName,lastName,email);
    let jsonCustomer = {firstname: firstName, lastname: lastName, email: email};

    return this.httpClient.post(
      this.urlPrincipal + 'customer', jsonCustomer );
  }


}
