import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
// '../../../../environments/environment';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

 
    TOKEN = 'Bearer ';
  
    clearTimeout: any;
  
  
    constructor(private httpClient: HttpClient, private router: Router) { }

    create_user(data) {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.TOKEN });
      return this.httpClient.post(`${environment.api_rul}/masters/user/create`, data, {headers: headers});
    }

}
