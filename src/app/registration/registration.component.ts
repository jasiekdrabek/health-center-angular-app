import { Component } from '@angular/core';
import { hashPassword } from '../helpers/hashPassword';
import { isValidPesel } from '../helpers/isVaildPesel';
import { isValidPassword } from '../helpers/isValidPassword';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  constructor(private userService: UserService) {}
  isValidPesel = isValidPesel;
  isValidPassword = isValidPassword;
  registrationClick(
    login: string,
    password: string,
    name: string,
    pesel: string
  ): void {
    login = login.trim();
    password = password.trim();
    name = name.trim();
    pesel = pesel.trim();
    if (!pesel || !login || !password || !name) return;
    if (!isValidPesel(pesel)) return;
    if (!isValidPassword(password)) return;
    password = hashPassword(password);
    this.userService
      .addUser({
        login: login,
        password: password,
        pesel: pesel,
        name: name,
        role: 'patient',
      } as User)
      .subscribe();
  }
}
