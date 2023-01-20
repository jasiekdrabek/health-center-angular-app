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
        password: '3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2',
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
