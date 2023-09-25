import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { ThemeModule } from '../theme/theme.module';
import { NgApexchartsModule } from "ng-apexcharts";
// import { LedgerComponent } from './ledger/ledger.component';
// import { StockItemComponent } from './stock-item/stock-item.component';
// import { AmountComponent } from './amount/amount.component';
import { StockSummaryComponent } from './stock-summary/stock-summary.component';
// import { AgeingComponent } from './ageing/ageing.component';
import { LegalSupportComponent } from './legal-support/legal-support.component';
import { TaskComponent } from './task/task.component';
import { BillDiscountComponent } from './bill-discount/bill-discount.component';
import { ClientComponent } from './client/client.component';
import { FollowupComponent } from './followup/followup.component';
import { ProfileComponent } from './profile/profile.component';





@NgModule({
  declarations: [
    LandingComponent,
    // DashboardComponent,
    // LedgerComponent,
    // StockItemComponent,
    // sAmountComponent,
    StockSummaryComponent,
    // AgeingComponent,
    LegalSupportComponent,
    TaskComponent,
    BillDiscountComponent,
    ClientComponent,
    FollowupComponent,
    ProfileComponent,
    
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ThemeModule,
    NgApexchartsModule,
  ]
})
export class FeaturesModule { }
