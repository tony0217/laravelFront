import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterDetailsService {
  // path
  urlPrincipal = 'http://localhost/api-laravel/apiRest/public/api/';

  constructor(private httpClient: HttpClient) { }

  // get list customer
  getcustomers(): Observable<any> {
    return this.httpClient.get(
      this.urlPrincipal + `customer`
    );
  }
  // update customer
  upDateCustomer(id: number, firstName: string, lastName: string, email: string): Observable<any> {
    console.log(id, firstName, lastName, email);
    let lastnameValid = lastName == '------------' || lastName == null || lastName == '';
    if (lastnameValid) {
      lastName = '------------'
    }
    let jsonCustomer = { firstname: firstName, lastname: lastName, email: email };
    return this.httpClient.put(
      this.urlPrincipal + 'customer/' + id, jsonCustomer);
  }
  // delete customer
  deleteCustomer(id: number): Observable<any> {
    console.log(id);
    return this.httpClient.delete(
      this.urlPrincipal + 'customer/' + id);
  }


}
