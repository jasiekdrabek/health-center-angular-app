import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MedicalVisit } from '../interfaces/medicalVisit';
import { User } from '../interfaces/user';
import { MedicalVisitService } from '../services/medical-visit.service';
import { UserService } from '../services/user.service';
import { SnackBarMessageService } from '../services/snack-bar-message.service';

@Component({
  selector: 'app-medical-visit',
  templateUrl: './medical-visit.component.html',
  styleUrls: ['./medical-visit.component.css'],
})
export class MedicalVisitComponent implements OnInit, AfterViewInit {
  user!: User | undefined;
  selectedPatient!: User;
  selectedDoctor!: User;
  todayVisitInProgress!: number;
  todayVisitFinished!: number;
  patients!: User[];
  doctors!: User[];
  dataSourceVisitFinished!: MatTableDataSource<MedicalVisit>;
  dataSourceVisitInProgress!: MatTableDataSource<MedicalVisit>;
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();
  isLoadingResults = true;
  isRateLimitReachedVisitInProgress = false;
  isRateLimitReachedVisitFinished = false;
  displayedColumns: string[] = ['patient', 'date'];
  displayedColumnsWithEdit: string[] = [...this.displayedColumns, 'actions'];
  constructor(
    private snackBarMessageService: SnackBarMessageService,
    private medicalVisitService: MedicalVisitService,
    private userService: UserService
  ) {
    this.user = this.userService.userValue;
    this.medicalVisitService.getMedicalVisitInProgress(this.user?._id as string).subscribe((visits) => {
      this.medicalVisitService.getMedicalVisitFinished(this.user?._id as string).subscribe((visits) => {
        this.dataSourceVisitFinished = new MatTableDataSource(visits);
        this.dataSourceVisitFinished.paginator = this.paginator.toArray()[0];
        this.dataSourceVisitFinished.sort = this.sort.toArray()[0];
      });
      this.dataSourceVisitInProgress = new MatTableDataSource(visits);
      this.dataSourceVisitInProgress.paginator = this.paginator.toArray()[1];
      this.dataSourceVisitInProgress.sort = this.sort.toArray()[1];
      this.isRateLimitReachedVisitInProgress = true;
    });
  }

  ngAfterViewInit(): void {
    this.medicalVisitService.getMedicalVisitInProgress(this.user?._id as string).subscribe((visits) => {
      this.medicalVisitService.getMedicalVisitFinished(this.user?._id as string).subscribe((visits) => {
        this.dataSourceVisitFinished = new MatTableDataSource(visits);
        this.dataSourceVisitFinished.paginator = this.paginator.toArray()[0];
        this.dataSourceVisitFinished.sort = this.sort.toArray()[0];
        this.isRateLimitReachedVisitFinished = true;
        this.dataSourceVisitFinished.filterPredicate = (data, filter) => {
          const dataStr = data._id + data.patient.name.toLowerCase() + data.date;
          return dataStr.indexOf(filter) != -1;
        };
      });
      this.dataSourceVisitInProgress = new MatTableDataSource(visits);
      this.isRateLimitReachedVisitInProgress = true;
      this.dataSourceVisitInProgress.paginator = this.paginator.toArray()[1];
      this.dataSourceVisitInProgress.sort = this.sort.toArray()[1];
      this.dataSourceVisitInProgress.filterPredicate = (data, filter) => {
        const dataStr = data._id + data.patient.name.toLowerCase() + data.date;
        return dataStr.indexOf(filter) != -1;
      };
    });
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((patients) => {
      patients.splice(patients.findIndex(patient => patient._id == this.user?._id),1)
      this.patients = patients;      
    });
    this.userService
      .getUsers('doctor')
      .subscribe((doctors) => (this.doctors = doctors));
    this.medicalVisitService
      .getTodayMedicalVisitInProgress(this.user?._id as string)
      .subscribe(
        (medcalVisits) => (this.todayVisitInProgress = medcalVisits.length)
      );
    this.medicalVisitService
      .getTodayMedicalVisitFinished(this.user?._id as string)
      .subscribe(
        (medcalVisits) => (this.todayVisitFinished = medcalVisits.length)
      );
  }

  addVisitClick(patient: User, doctor: User) {
    if (!patient || !doctor) return;
    if(patient._id == doctor._id) return;
    const nowDate = new Date();
    const date =
      nowDate.getDate() +
      '.' +
      (nowDate.getMonth() + 1) +
      '.' +
      nowDate.getFullYear();
    this.medicalVisitService
      .addMedicalVisit({
        patient: patient,
        doctorId: doctor._id,
        status: 'in progress',
        date: date,
      } as MedicalVisit)
      .subscribe(() => {
        this.todayVisitInProgress += 1;
        this.ngAfterViewInit();
        this.openSnackBar('add new visit for ' + this.selectedPatient.name)
      });
  }

  applyFilterInProgress(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceVisitInProgress.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceVisitInProgress.paginator) {
      this.dataSourceVisitInProgress.paginator.firstPage();
    }
  }

  applyFilterFinished(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceVisitFinished.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceVisitFinished.paginator) {
      this.dataSourceVisitFinished.paginator.firstPage();
    }
  }

  openSnackBar(message: string) {
    this.snackBarMessageService.open(message).afterDismissed()    
  }
}
