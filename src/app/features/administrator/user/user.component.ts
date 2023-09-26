import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {AdministratorService} from '../administrator.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  @ViewChild('myModal') modal: any;
  @ViewChild('adminCheck', { static: true }) adminCheck: ElementRef;
  @ViewChild('CRMcheck', { static: true }) updateCheck: ElementRef;
  @ViewChild('usercheck', { static: true }) deleteCheck: ElementRef;
  UserFormGroup: FormGroup;
  ChangePasswordFormGroup: FormGroup;
  constructor(private renderer: Renderer2, private el: ElementRef,private formBuilder: FormBuilder,private AdministratorService:AdministratorService) {}
  isAdmin=false
  isCRM=false
  isuser=false
  ngOnInit(): void {
    this.UserFormGroup = this.formBuilder.group({
      first_name: ['', [Validators.required, Validators.pattern('^[a-zA-Z_ ]+$')]],
      last_name: ['', [Validators.required, Validators.pattern('^[a-zA-Z_ ]+$')]],
      designation: ['', [Validators.required, Validators.pattern('^[a-zA-Z_ ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern('^[0-9_]+$'), Validators.minLength(10), Validators.maxLength(13)]],
      is_admin: [],
      // is_legal:[],
      is_crm: [],
      // is_task:[],
      // is_onboard:[],
      is_insert: [1],
      is_update: [1],
      is_delete: [1],
      is_mail: [1],
      company_id: [''],
      subscription_id: [''],
      user_id: [''],
      user_no: [''],
    });
    this.ChangePasswordFormGroup = this.formBuilder.group({
      new_password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
      user_no: [],
      logged_user: []
    });
    

  }

  get getFormControls() {
    return this.UserFormGroup.controls;
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

  adminCheckHandler() {
    if (this.adminCheck.nativeElement.checked) {
      this.isAdmin=true
      this.isCRM=true
      this.isuser=true

      this.UserFormGroup.controls['is_admin'].setValue('1');
      this.UserFormGroup.controls['is_crm'].setValue('1');
      // this.UserFormGroup.controls['is_update'].setValue('1');
      // this.UserFormGroup.controls['is_delete'].setValue('1');
      // this.UserFormGroup.controls['is_mail'].setValue('1');

    } else {
      this.isAdmin=false
      this.isCRM=false
      this.isuser=false

      this.UserFormGroup.controls['is_admin'].setValue('0');
      this.UserFormGroup.controls['is_crm'].setValue('0');
      // this.UserFormGroup.controls['is_update'].setValue('0');
      // this.UserFormGroup.controls['is_delete'].setValue('0');
      // this.UserFormGroup.controls['is_mail'].setValue('0');
    }
  }


  createUser() {
    //this.submitted = true;
    console.log("DATA-----",this.UserFormGroup.value);
    if (this.UserFormGroup.valid) {

     // this.ngxService.show();
      if (this.UserFormGroup.controls['is_admin'].value == null) {
        this.UserFormGroup.controls['is_admin'].setValue(0);
      }
      // if (this.UserFormGroup.controls.is_legal.value == null) {
      //   this.UserFormGroup.controls.is_legal.setValue(0);
      // }
      if (this.UserFormGroup.controls['is_crm'].value == null) {
        this.UserFormGroup.controls['is_crm'].setValue(0);
      }
      // if (this.UserFormGroup.controls.is_task.value == null) {
      //   this.UserFormGroup.controls.is_task.setValue(0);
      // }
      // if (this.UserFormGroup.controls.is_onboard.value == null) {
      //   this.UserFormGroup.controls.is_onboard.setValue(0);
      // }


      this.UserFormGroup.controls['company_id'].setValue(window.localStorage.getItem('company_id'));
      this.UserFormGroup.controls['subscription_id'].setValue(window.localStorage.getItem('subscription_id'));
      this.UserFormGroup.controls['user_id'].setValue(window.localStorage.getItem('user_id'));


      this.AdministratorService.create_user(this.UserFormGroup.value).subscribe(result => {
        console.log("kur kur --->",result);
        
        if (result['status'] === 200) {
        //   this.userSuccess = true;
        //   this.userError = false;
        //   // this.readUsers(this.offset, this.limit)
        //   this.submittedModal.show();
        //   this.UserFormGroup.reset();
        //   this.submitted = false;
        //   //this.readUsers(this.limit, this.limit);
        // //  this.ngxService.hide();

        } else if (result['status'] === 203) {

          
        //   this.userError = true;
        //   this.userSuccess = false;
        // //  this.ngxService.hide();

        } else if (result['status'] === 205) {

        //   this.userSuccess = false;
        //   this.userError = false;
        //   this.groupModelLimitSuccessModel.show();
        //   this.userLimitError = true;
        //   this.UserFormGroup.reset();
        //  // this.ngxService.hide();
        }
        this.UserFormGroup.reset();

        //  setTimeout(() => { this.userError = false; this.userSuccess = false; }, 10000);
        //this.readUsers(this.offset, this.limit);
      }, error => {
        console.log('ERROR - ', error);
      });
    }


  }

  
}
