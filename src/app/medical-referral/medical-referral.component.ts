import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MedicalReferral } from '../interfaces/medicalReferral';
import { User } from '../interfaces/user';
import { MedicalReferralService } from '../services/medical-referral.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-medical-referral',
  templateUrl: './medical-referral.component.html',
  styleUrls: ['./medical-referral.component.css'],
})
export class MedicalReferralComponent {
  displayedColumns: string[] = [
    'code',
    'date',
    'toWhichSpecialistDoctor',
  ];
  dataSource!: MatTableDataSource<MedicalReferral>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  isLoadingResults = true;
  isRateLimitReached = false;
  user: User | undefined;

  constructor(
    private medicalReferralService: MedicalReferralService,
    private userService: UserService
  ) {
    this.user = this.userService.userValue;
    if (this.user && this.user._id){
    this.medicalReferralService
      .getUserMedicalReferrals(this.user._id as string)
      .subscribe((medicalReferrals) => {
        this.dataSource = new MatTableDataSource(medicalReferrals);
        this.isRateLimitReached = true;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }
  }

  ngAfterViewInit() {
    if (this.user && this.user._id){
    this.medicalReferralService
      .getUserMedicalReferrals(this.user?._id as string)
      .subscribe((medicalReferrals) => {
        this.dataSource = new MatTableDataSource(medicalReferrals);
        this.isRateLimitReached = true;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
