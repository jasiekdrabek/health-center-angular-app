import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { handleError } from '../helpers/handleError';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = process.env['URL'];
  userSubject: BehaviorSubject<User | undefined>;
  user: any;

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

  public getUsers(role = ''): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl + `getallusers?role=${role}`).pipe(catchError(handleError<User[]>([])));
  }

  public deleteUser(id:string):Observable<User>{
    return this.http.delete<User>(this.usersUrl + `deleteuser/${id}`).pipe(catchError(handleError<User>()))
  }

  public addUser(user : User){   
    return this.http.post<User>(this.usersUrl + 'adduser/',user ).pipe(catchError(handleError<User>()))
  }
}
