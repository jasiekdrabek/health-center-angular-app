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
    if (!isValidPesel(pesel)) {
      alert('wrong pesel');
      return;
    }
    if (!isValidPassword(password)) {
      alert(
        'password must have at least one digit, uppercase and lowercase letter and must be between 6 and 20 characters'
      );
      return;
    }
    password = hashPassword(password);
    this.userService.addUser({
      login: login,
      password: password,
      pesel: pesel,
      name: name,
      role:'patient'
    } as User);
    alert(`Add user ${login}`);
  }
}
