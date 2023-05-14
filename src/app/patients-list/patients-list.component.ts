import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { SnackBarMessageService } from '../services/snack-bar-message.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css'],
})
export class PatientsListComponent {
  displayedColumns: string[] = ['name', 'pesel', 'actions'];
  dataSource!: MatTableDataSource<User>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(
    private userService: UserService,
    private snackBarMessageService: SnackBarMessageService
  ) {
    this.userService.getUsers('patient').subscribe((users) => {
      this.dataSource = new MatTableDataSource(users);
      this.isRateLimitReached = true;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    this.userService.getUsers('patient').subscribe((users) => {
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
    this.userService.deleteUser(user._id).subscribe((user) => {
      user.name
        ? this.openSnackBar(`deleted user ${user.name}`)
        : this.openSnackBar(`There is no user with this id`);
      this.ngAfterViewInit();
    });
  }

  openSnackBar(message: string) {
    this.snackBarMessageService.open(message).afterDismissed();
  }
}
