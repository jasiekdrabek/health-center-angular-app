import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Medicine } from '../interfaces/medicine';
import { handleError } from '../helpers/handleError';

@Injectable()
export class MedicinesService {
  private medicinesUrl = 'https://health-center-angular-app-back.herokuapp.com/api/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Medicine[]> {
    return this.http
      .get<Medicine[]>(this.medicinesUrl + 'getallmedicines')
      .pipe(catchError(handleError<Medicine[]>([])));
  }
}
