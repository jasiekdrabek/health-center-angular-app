import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsListRoutingModule } from './patients-list-routing.module';
import { PatientsListComponent } from './patients-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarMessageService } from '../services/snack-bar-message.service';
@NgModule({
  declarations: [PatientsListComponent],
  imports: [
    CommonModule,
    PatientsListRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatSnackBarModule
  ],
  providers:[SnackBarMessageService],
})
export class PatientsListModule {}
