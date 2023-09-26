import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorRoutingModule } from './administrator-routing.module';
import { UserComponent } from './user/user.component';
import { LedgerComponent } from './ledger/ledger.component';
import { OnboardMastersComponent } from './onboard-masters/onboard-masters.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { CompanyComponent } from './company/company.component';
import { GeneralConfigComponent } from './general-config/general-config.component';
import { ReactiveFormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    UserComponent,
    LedgerComponent,
    OnboardMastersComponent,
    BankDetailsComponent,
    CompanyComponent,
    GeneralConfigComponent
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule,ReactiveFormsModule
  ]
})
export class AdministratorModule { }
