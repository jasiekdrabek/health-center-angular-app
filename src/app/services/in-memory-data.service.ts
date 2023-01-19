import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  createDb() {
    const users: User[] = [
      {
        id: 0,
        login: 'drJan',
        password: '123',
        name: 'Jan Drabek',
        pesel: '97230410714',
        role: 'doctor',
      },
    ];
    return {users}
  }

  genId(user: User[]): number {
    return user.length > 0 ? Math.max(...user.map((user) => user.id)) + 1 : 0;
  }
}
