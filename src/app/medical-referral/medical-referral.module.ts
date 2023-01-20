import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalReferralRoutingModule } from './medical-referral-routing.module';
import { MedicalReferralComponent } from './medical-referral.component';


@NgModule({
  declarations: [
    MedicalReferralComponent
  ],
  imports: [
    CommonModule,
    MedicalReferralRoutingModule
  ]
})
export class MedicalReferralModule { }
