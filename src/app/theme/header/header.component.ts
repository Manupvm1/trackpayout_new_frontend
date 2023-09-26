import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('myModal') modal: any;

  constructor(private renderer: Renderer2, private el: ElementRef,private AuthService:AuthService,private router: Router) {}

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
    // // this.modal.nativeElement.style.display = 'none';
    // const modelDiv = document.getElementById('myModal');
    // if(modelDiv!=null){
    //   modelDiv.style.display = 'none';

    // }
    console.log("close");
    const modal = this.el.nativeElement.querySelector('#myModal');
    this.renderer.setStyle(modal, 'display', 'none');
    // const modelDiv = document.getElementById('myModal');
    // if(modelDiv!=null){
    //   modelDiv.style.display = 'block';

    // }

  }

 
  logout() {

    this.AuthService.logout().subscribe(result => {
      if (result['status'] == 200) {
        this.router.navigate(['/auth/login']);
        window.localStorage.clear();
      }
    })


  }
}
