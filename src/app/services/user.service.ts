import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { handleError } from '../helpers/handleError';
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
    return this.http.get<User[]>(this.usersUrl).pipe(catchError(handleError<User[]>([])));
  }

  getPatients():Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl + '?role=patient').pipe(catchError(handleError<User[]>([])));
  }

  getDoctors():Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl + '?role=doctor').pipe(catchError(handleError<User[]>([])));
  }

  deleteUser(id:number):Observable<User>{
    return this.http.delete<User>(this.usersUrl + `/${id}`).pipe(catchError(handleError<User>()))
  }

  addUser(user : User){   
    return this.http.post<User>(this.usersUrl,user,this.httpOptions).pipe(catchError(handleError<User>()))
  }
}
