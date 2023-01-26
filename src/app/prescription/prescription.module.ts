import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionRoutingModule } from './prescription-routing.module';
import { PrescriptionComponent } from './prescription.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PrescriptionService } from '../services/prescription.service';

@NgModule({
  declarations: [PrescriptionComponent],
  imports: [
    CommonModule,
    PrescriptionRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [ PrescriptionService],
})
export class PrescriptionModule {}
