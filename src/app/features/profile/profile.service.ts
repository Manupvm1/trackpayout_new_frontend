import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  TOKEN = 'Bearer ';

  clearTimeout: any;


  constructor(private httpClient: HttpClient, private router: Router) { }
///profileview
  getProfile() {
    const companyId = window.localStorage.getItem('company_id');
    const userId = window.localStorage.getItem('user_id');
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.TOKEN });
    return this.httpClient.get(`${environment.api_rul}/profile/read/?company_id=` + companyId + '&logged_user=' + userId, {headers: headers});
  }
}
