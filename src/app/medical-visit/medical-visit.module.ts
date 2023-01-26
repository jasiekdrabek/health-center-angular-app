import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalVisitRoutingModule } from './medical-visit-routing.module';
import { MedicalVisitComponent } from './medical-visit.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DetailsComponent } from './details/details.component';
import { MedicalVisitService } from '../services/medical-visit.service';
import { MedicalReferralService } from '../services/medical-referral.service';
import { PrescriptionService } from '../services/prescription.service';
import { MedicinesService } from '../services/medicines.service';

@NgModule({
  declarations: [DetailsComponent, MedicalVisitComponent],
  imports: [
    CommonModule,
    MedicalVisitRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
  ],
  providers: [
    MedicalVisitService,
    MedicalReferralService,
    PrescriptionService,
    MedicinesService,
  ],
})
export class MedicalVisitModule {}
