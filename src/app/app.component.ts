import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { User } from './interfaces/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    const localStorageUser = localStorage.getItem('user');
    if (localStorageUser) {
      this.userService.setUserValue(JSON.parse(localStorageUser));
    }
    this.userService.getUser().subscribe((user) => (this.user = user));
  }

  signOut() {
    this.userService.setUserValue(undefined);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  title = 'health-center-angular-app';
  user!: User | undefined;
}
