import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { hashPassword } from '../helpers/hashPassword';
import { SnackBarMessageService } from '../services/snack-bar-message.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private snackBarMessageService: SnackBarMessageService,
    private router: Router,
    private userService: UserService
  ) {}

  loginClick(login: string, password: string): void {
    login = login.trim();
    password = password.trim();
    if (!login || !password) return;
    password = hashPassword(password);
    this.userService.getUsers().subscribe((users) => {
      const user = users.find(
        (x) => x.login === login && x.password === password
      );
      if (!user) {
        this.openSnackBar('Incorrect login or password');
        return;
      }
      if (user) {
        this.userService.setUserValue(user);
        this.router.navigate(['/home']);
        localStorage.setItem('user', JSON.stringify(user));
      }
    });
  }

  openSnackBar(message: string) {
    this.snackBarMessageService.open(message).afterDismissed();
  }
}
