import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/auth.service';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  @ViewChild('myModal') modal: any;
  CompanyDetails: any;
  userdata: any;
  subscriptionremaining: any;
 

  constructor(private renderer: Renderer2, private el: ElementRef,private AuthService:AuthService,private router: Router,private ProfileService:ProfileService) {}

  ngOnInit(): void {
    this.getCompanyData()

  }



  openModel(){
    console.log("OPEN");
    const modal = this.el.nativeElement.querySelector('#myModal');
    this.renderer.setStyle(modal, 'display', 'block');
    // const modelDiv = document.getElementById('myModal');
    // if(modelDiv!=null){
    //   modelDiv.style.display = 'block';

    // }
  }

  closeModel(){
    // this.modal.nativeElement.style.display = 'none';
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!=null){
      modelDiv.style.display = 'none';

    }
  }


  logout() {

    this.AuthService.logout().subscribe(result => {
      if (result['status'] == 200) {
        this.router.navigate(['/auth/login']);
        window.localStorage.clear();
      }
    })


  }


  getCompanyData() {
    this.ProfileService.getProfile().subscribe(result => {
      console.log(result);
      if (result['status'] == 200) {
        this.CompanyDetails = result['customer'];
        this.userdata= result['user'];
        const todate=new Date()
        const subexpiry=new Date(this.userdata.subscription_detail.subscription_end)
       
       
      
        // Calculate the time difference in milliseconds
        const timeDifference = subexpiry.getTime() - todate.getTime();
      
        // Convert milliseconds to days
        const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      
        this.subscriptionremaining=daysDifference

      } else {
        this.CompanyDetails = [];
        this.userdata= [];
      }
    }, error => {
      console.log(error);
    });
  }

}
