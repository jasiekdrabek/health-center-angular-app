import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Medicine } from '../interfaces/medicine';
import { MedicinesService } from '../services/medicines.service';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css'],
})
export class MedicinesComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'dose', 'activeSubstance'];
  dataSource!: MatTableDataSource<Medicine>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(private medicinesService: MedicinesService) {
    this.medicinesService.getAll().subscribe((medicines) => {
      this.dataSource = new MatTableDataSource(medicines);
      this.isRateLimitReached = true;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    this.medicinesService.getAll().subscribe((medicines) => {
      this.dataSource = new MatTableDataSource(medicines);
      this.isRateLimitReached = true;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
