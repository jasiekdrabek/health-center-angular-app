import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Medicine } from '../interfaces/medicine';
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

    const medicines:Medicine[] = [
      {
        id:0,name:'apap',dose:1000,activeSubstance:'a bo ja wiem'
      },
      {
        id:1,name:'apap',dose:1000,activeSubstance:'a bo ja wiem'
      },
      {
        id:2,name:'apap',dose:1000,activeSubstance:'a bo ja wiem'
      },
      {
        id:3,name:'apap',dose:1000,activeSubstance:'a bo ja wiem'
      }
      ,{
        id:4,name:'apap',dose:1000,activeSubstance:'a bo ja wiem'
      }
      ,{
        id:5,name:'apap',dose:1000,activeSubstance:'a bo ja wiem'
      }
      ,{
        id:6,name:'apap',dose:1000,activeSubstance:'a bo ja wiem'
      },
      {
        id:7,name:'apap',dose:1000,activeSubstance:'a bo ja wiem'
      },{
        id:8,name:'apap',dose:1000,activeSubstance:'a bo ja wiem'
      }

    ]
    return {users, medicines}
  }

  genId(user: User[]): number {
    return user.length > 0 ? Math.max(...user.map((user) => user.id)) + 1 : 0;
  }
}
