import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User | undefined>(undefined);
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User | undefined {
    return this.userSubject.value;
  }

  public getUser(){
    return this.userSubject.asObservable()
  }
  public setUserValue(user : User | undefined){
    this.userSubject.next(user);
  }  

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  addUser(user : User):void{
    this.http.post<User>(this.usersUrl,user,this.httpOptions)
  }
}
