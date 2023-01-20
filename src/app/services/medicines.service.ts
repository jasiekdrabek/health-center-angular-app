import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine } from '../interfaces/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  private medicinesUrl = 'api/medicines';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  getAll():Observable<Medicine[]>{
    return this.http.get<Medicine[]>(this.medicinesUrl)
  }
}
