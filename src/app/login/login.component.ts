import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { hashPassword } from '../helpers/hashPassword';
import { SnackBarMessageService } from '../services/snack-bar-message.service';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

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
    var newUser: User = { login: login, password: password };
    this.userService.auth(newUser).subscribe((user: any) => {
      if (!user) {
        this.openSnackBar('Incorrect login or password');
        return;
      }
      if (user) {
        this.userService.setUserValue(user[0]);
        this.router.navigate(['/home']);
        localStorage.setItem('user', JSON.stringify(user[0]));
      }
    });
  }

  openSnackBar(message: string) {
    this.snackBarMessageService.open(message).afterDismissed();
  }
}
