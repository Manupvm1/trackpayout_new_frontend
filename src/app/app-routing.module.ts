import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing.component';


const routes: Routes = [

  {
    path:'',
    redirectTo:'features',
    pathMatch:'full'
  },

 
  // {
  //   path:'',
  //   redirectTo:'reports',
  //   pathMatch:'full'
  // },
  
  {
    path:'features',
    component:LandingComponent,
    loadChildren: () => import('./features/features.module').then((module) => module.FeaturesModule)
  },


  // {
  //   path:'',
  //   redirectTo:'byduedays',
  //   pathMatch:'full'
  // },
  
  // {
  //   path:'byduedays',
  //   component:LandingComponent,
  //   loadChildren: () => import('./byduedays/byduedays.module').then((module) => module.ByduedaysModule)
  // },
  // {
  //   path:'',
  //   redirectTo:'statutory',
  //   pathMatch:'full'
  // },
  
  // {
  //   path:'statutory',
  //   component:LandingComponent,
  //   loadChildren: () => import('./statutory/statutory.module').then((module) => module.StatutoryModule)
  // },

  // {
  //   path:'',
  //   redirectTo:'ledgerstatement',
  //   pathMatch:'full'
  // },
  
  // {
  //   path:'ledgerstatement',
  //   component:LandingComponent,
  //   loadChildren: () => import('./ledgerstatement/ledgerstatement.module').then((module) => module.LedgerstatementModule)
  // },

  // {
  //   path:'features',
  //   component:LandingComponent,
  //   loadChildren: () => import('./features/features.module').then((module) => module.FeaturesModule)
  // },

  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
