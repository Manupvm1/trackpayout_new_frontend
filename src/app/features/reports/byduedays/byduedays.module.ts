import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SundrydebtorComponent } from './sundrydebtor/sundrydebtor.component';
import { SundrycreditorComponent } from './sundrycreditor/sundrycreditor.component';
// import { ByduedaysRoutingModule } from 'src/app/byduedays/byduedays-routing.module';




@NgModule({
  declarations: [
    SundrydebtorComponent,
    SundrycreditorComponent
  ],
  imports: [
    CommonModule,
    // ByduedaysRoutingModule
    
  ]
})
export class ByduedaysModule { }
