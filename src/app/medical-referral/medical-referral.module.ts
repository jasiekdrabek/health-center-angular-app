import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalReferralRoutingModule } from './medical-referral-routing.module';
import { MedicalReferralComponent } from './medical-referral.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    MedicalReferralComponent
  ],
  imports: [
    CommonModule,
    MedicalReferralRoutingModule,    
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    MatSortModule,
  ]
})
export class MedicalReferralModule { }
