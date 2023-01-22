import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Medicine } from '../interfaces/medicine';
import { handleError } from '../helpers/handleError';

@Injectable({
  providedIn: 'root',
})
export class MedicinesService {
  private medicinesUrl = 'api/medicines';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<Medicine[]> {
    return this.http
      .get<Medicine[]>(this.medicinesUrl)
      .pipe(catchError(handleError<Medicine[]>([])));
  }
}
