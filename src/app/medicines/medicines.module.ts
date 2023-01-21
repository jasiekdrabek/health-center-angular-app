import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicinesRoutingModule } from './medicines-routing.module';
import { MedicinesComponent } from './medicines.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [MedicinesComponent],
  imports: [
    CommonModule,
    MedicinesRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    MatSortModule,
  ],
})
export class MedicinesModule {}
