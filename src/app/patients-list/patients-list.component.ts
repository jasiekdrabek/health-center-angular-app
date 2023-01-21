import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css'],
})
export class PatientsListComponent {
  displayedColumns: string[] = ['id', 'name', 'pesel', 'actions'];
  dataSource!: MatTableDataSource<User>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(private userService: UserService) {
    this.userService.getPatients().subscribe((users) => {
      this.dataSource = new MatTableDataSource(users);
      this.isRateLimitReached = true;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    this.userService.getPatients().subscribe((users) => {
      this.dataSource = new MatTableDataSource(users);
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

  delete(user: User): void {
    this.userService.deleteUser(user.id).subscribe();
    this.ngAfterViewInit();
  }
}
