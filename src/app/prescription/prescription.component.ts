import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Prescription } from '../interfaces/prescription';
import { User } from '../interfaces/user';
import { PrescriptionService } from '../services/prescription.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class PrescriptionComponent implements AfterViewInit {
  displayedColumns: string[] = ['code', 'date'];
  displayedMedicineColumns: string[] = [
    'name',
    'activeSubstance',
    'dose',
    'quantity',
  ];
  displayedColumnsWithExpand = [...this.displayedColumns, 'expand'];
  dataSource!: MatTableDataSource<Prescription>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  isLoadingResults = true;
  isRateLimitReached = false;
  user!: User | undefined;
  expandedElement!: Prescription | null;

  constructor(
    private prescriptionService: PrescriptionService,
    private userService: UserService
  ) {
    this.user = this.userService.userValue;
    if (this.user && this.user._id) {
      this.prescriptionService
        .getUserPrescriptions(this.user._id as string)
        .subscribe((prescription) => {
          this.dataSource = new MatTableDataSource(prescription);
          this.isRateLimitReached = true;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
    }
  }

  ngAfterViewInit() {
    this.prescriptionService
      .getUserPrescriptions(this.user?._id as string)
      .subscribe((prescription) => {
        this.dataSource = new MatTableDataSource(prescription);
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
