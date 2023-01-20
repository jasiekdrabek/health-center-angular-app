import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalReferralComponent } from './medical-referral.component';

const routes: Routes = [{ path: '', component: MedicalReferralComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalReferralRoutingModule { }
