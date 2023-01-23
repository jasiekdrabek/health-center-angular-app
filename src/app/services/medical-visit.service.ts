import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { handleError } from '../helpers/handleError';
import { catchError, Observable } from 'rxjs';
import { MedicalVisit } from '../interfaces/medicalVisit';

@Injectable({
  providedIn: 'root',
})
export class MedicalVisitService {
  urlMedicalVisit = 'api/medicalVisits';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  addMedicalVisit(medicalVisit: MedicalVisit) {
    return this.http
      .post<MedicalVisit>(this.urlMedicalVisit, medicalVisit, this.httpOptions)
      .pipe(catchError(handleError()));
  }

  getTodayMedicalVisitInProgress(): Observable<MedicalVisit[]> {
    const nowDate = new Date();
    const date =
      nowDate.getDate() +
      '.' +
      (nowDate.getMonth() + 1) +
      '.' +
      nowDate.getFullYear();
    return this.http
      .get<MedicalVisit[]>(this.urlMedicalVisit + `?status=in progress&date=${date}`)
      .pipe(catchError(handleError([])));
  }

  getTodayMedicalVisitFinished(): Observable<MedicalVisit[]> {
    const nowDate = new Date();
    const date =
      nowDate.getDate() +
      '.' +
      (nowDate.getMonth() + 1) +
      '.' +
      nowDate.getFullYear();
    return this.http
      .get<MedicalVisit[]>(this.urlMedicalVisit + `?status=finish&date=${date}`)
      .pipe(catchError(handleError([])));
  }

  getMedicalVisitInProgress(): Observable<MedicalVisit[]> {    
    return this.http
      .get<MedicalVisit[]>(this.urlMedicalVisit + `?status=in progress`)
      .pipe(catchError(handleError([])));
  }

  getMedicalVisitFinished(): Observable<MedicalVisit[]> {
    return this.http
      .get<MedicalVisit[]>(this.urlMedicalVisit + `?status=finish&date`)
      .pipe(catchError(handleError([])));
  }
}
