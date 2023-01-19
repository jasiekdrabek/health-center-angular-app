import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'api/users';
  userSubject: BehaviorSubject<User | undefined>;
  user: any;
  u: User = {
    id: 0,
    login: '0',
    password: '0',
    name: 'Jan Drabek',
    pesel: '98072410812',
    role: 'doctor',
  };

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User | undefined>(undefined);
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User | undefined {
    return this.userSubject.value;
  }

  public getUser(){
    return this.userSubject
  }
  public setUserValue(user : User | undefined){
    this.userSubject.next(user);
  }  

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
}
