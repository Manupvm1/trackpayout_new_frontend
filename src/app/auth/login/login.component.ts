import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
 import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  signinFormGroup: FormGroup;
  returnUrl = '';
  submitted = false;
  authError = false;
  errorMessage = "";
  socket: any;
  expiryDate: any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    // private ngxService: NgxSpinnerService,
    // private logService: LogService
    ) {
  }
  get getFormControls() {
    return this.signinFormGroup.controls;
  }
  ngOnInit() {
    // this.returnUrl = this.route.snapshot.paramMap.get('returnUrl') || '/';
    this.returnUrl = this.route.snapshot.paramMap.get('returnUrl') || '/';

    this.signinFormGroup = this.formBuilder.group({
      // company_id: ['', [Validators.required, Validators.pattern('^[0-9_]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

  }



  signIn() {
    this.submitted = true;

    if (this.signinFormGroup.valid) {
     // this.ngxService.show();
      this.authService.authenticateUser(this.signinFormGroup.value).subscribe(result => {

        if (result['status'] === 200) {



          this.expiryDate = new Date(new Date().getTime() + + result['expiresIn'] * 1000)

          window.localStorage.setItem('is_authenticated', 'true');
          window.localStorage.setItem('token', result['token']);
          window.localStorage.setItem('email', result['user']['email']);
          window.localStorage.setItem('subscription_id', result['user']['subscription_id']);
          window.localStorage.setItem('company_id', result['current_company']);
          window.localStorage.setItem('user_id', result['user']['id']);
          window.localStorage.setItem('first_name', result['user']['first_name']);
          window.localStorage.setItem('last_name', result['user']['last_name']);
          window.localStorage.setItem('designation', result['user']['designation']);
          window.localStorage.setItem('is_admin', result['user']['is_admin']);
          window.localStorage.setItem('is_update', result['user']['is_update']);
          window.localStorage.setItem('is_delete', result['user']['is_delete']);
          window.localStorage.setItem('created_at', result['user']['created_at']);
          window.localStorage.setItem('fy', result['financialyear']);
          window.localStorage.setItem('integration_type', result['subscription_detail']['company_integration_type'])
          window.localStorage.setItem('new_api', result['subscription_detail']['new_api'])
          window.localStorage.setItem('expireDate', this.expiryDate)

          this.authService.auto_logOut(result['expiresIn'] * 1000);

         // this.logService.get_log_count("").subscribe(result => {
           // if (result['data'] > 0) {
              this.router.navigate([this.returnUrl]);
            //} else {
              //let login_count = result['data'];
              //this.router.navigateByUrl(`/313out41yap141/profile?login_count=${login_count}`)
           // }
         // })
        } else if (result['status'] === 401) {
          this.authError = true;
          this.errorMessage = "User Already logged in another system";
        } else if (result['status'] === 201) {
          this.authError = true;
          this.errorMessage = "Invalid credentials found!";
        } else if (result['status'] == 203) {
          this.authError = true;
          this.errorMessage = "There is no active subscription for this id! Please contact your administrator!";
        }
       // this.ngxService.hide();
      }, error => {
       // this.ngxService.hide();
        console.log(error);
      });
    }
  }

  
}
