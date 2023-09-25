import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'
// '../../../../environments/environment';

import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  TOKEN = 'Bearer ';

  clearTimeout: any;


  constructor(private httpClient: HttpClient, private router: Router) { }

  authenticateUser(crendentials) {

    let auth = {
      email: crendentials.email,// CryptoJS.AES.encrypt(crendentials.email, environment.jwttoken).toString(),
      password: crendentials.password// CryptoJS.AES.encrypt(crendentials.password, environment.jwttoken).toString()
    }

    return this.httpClient.post(`${environment.api_rul}/authenticate`, auth);
  }

  resetPassword(userDetails) {
    return this.httpClient.post(`${environment.api_rul}/resetpassword`, userDetails);
  }

  logout() {

    let auth = { email: window.localStorage.getItem('email'), session: window.localStorage.getItem('token') }
    if (this.clearTimeout) {
      clearTimeout(this.clearTimeout);
    }
    return this.httpClient.post(`${environment.api_rul}/logOut`, auth);


    
  }

  isAuthenticated() {
    if (window.localStorage.getItem('is_authenticated')) {
      if (window.localStorage.getItem('token')) {
        return true
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  validateToken() {
    this.TOKEN = 'Bearer ' + window.localStorage.getItem('token');
    const companyId = window.localStorage.getItem('company_id');
    const logged_user = window.localStorage.getItem('user_id');
    const fy = window.localStorage.getItem('fy');
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.TOKEN });
    return this.httpClient.get(`${environment.api_rul}/dashboard/standard/read/?company_id=` + companyId + '&logged_user=' + logged_user + '&fy=' + fy, { headers: headers });
  }

  autoLogin() {


    let date = new Date().getTime();
    let expirationDate = new Date(window.localStorage.getItem('expireDate')).getTime();

    this.auto_logOut(expirationDate - date);
  }

  auto_logOut(expirationDate: number) {
    // console.log(expirationDate, "expirationDate");

    this.clearTimeout = setTimeout(() => {
      this.logout().subscribe(result => {
        if (result['status'] == 200) {
          confirm('Session Expired. Please log in again.');
          this.router.navigate(['/auth/signin']);
          window.localStorage.clear();
        }
      });
    }, expirationDate);
  }


}