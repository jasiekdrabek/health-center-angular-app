import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { handleError } from '../helpers/handleError';
import { catchError, Observable } from 'rxjs';
import { MedicalVisit } from '../interfaces/medicalVisit';

@Injectable({
  providedIn: 'any',
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
      .get<MedicalVisit[]>(
        this.urlMedicalVisit + `?status=in progress&date=${date}`
      )
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

  getMedicalVisitInProgress(id: number): Observable<MedicalVisit[]> {
    return this.http
      .get<MedicalVisit[]>(
        this.urlMedicalVisit + `?status=in progress&doctorId=${id}`
      )
      .pipe(catchError(handleError([])));
  }

  getMedicalVisitFinished(id: number): Observable<MedicalVisit[]> {
    return this.http
      .get<MedicalVisit[]>(
        this.urlMedicalVisit + `?status=finish&doctorId=${id}`
      )
      .pipe(catchError(handleError([])));
  }

  getMadicalVisit(id: number): Observable<MedicalVisit> {
    return this.http
      .get<MedicalVisit>(this.urlMedicalVisit + `/${id}`)
      .pipe(catchError(handleError({} as MedicalVisit)));
  }
}
