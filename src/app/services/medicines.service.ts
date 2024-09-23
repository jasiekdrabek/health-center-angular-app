import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Medicine } from '../interfaces/medicine';
import { handleError } from '../helpers/handleError';
import { environment } from '../../environments/environment';

@Injectable()
export class MedicinesService {
  private medicinesUrl = environment.Url;
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
