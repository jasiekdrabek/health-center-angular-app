import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { handleError } from '../helpers/handleError';
import { catchError, Observable } from 'rxjs';
import { MedicalVisit } from '../interfaces/medicalVisit';

@Injectable()
export class MedicalVisitService {
  urlMedicalVisit = 'https://health-center-angular-app-back.herokuapp.com/api/';
  constructor(private http: HttpClient) {}

  public addMedicalVisit(medicalVisit: MedicalVisit) {
    return this.http
      .post<MedicalVisit>(
        this.urlMedicalVisit + `addmedicalvisit`,
        medicalVisit
      )
      .pipe(catchError(handleError()));
  }

  public getTodayMedicalVisitInProgress(
    id: string
  ): Observable<MedicalVisit[]> {
    const nowDate = new Date();
    const date =
      nowDate.getDate() +
      '.' +
      (nowDate.getMonth() + 1) +
      '.' +
      nowDate.getFullYear();
    return this.http
      .get<MedicalVisit[]>(
        this.urlMedicalVisit +
          `getmedicalvisits?status=in progress&date=${date}&doctorId=${id}`
      )
      .pipe(catchError(handleError([])));
  }

  public getTodayMedicalVisitFinished(id: string): Observable<MedicalVisit[]> {
    const nowDate = new Date();
    const date =
      nowDate.getDate() +
      '.' +
      (nowDate.getMonth() + 1) +
      '.' +
      nowDate.getFullYear();
    return this.http
      .get<MedicalVisit[]>(
        this.urlMedicalVisit +
          `getmedicalvisits?status=finish&date=${date}&doctorId=${id}`
      )
      .pipe(catchError(handleError([])));
  }

  public getMedicalVisitInProgress(id: string): Observable<MedicalVisit[]> {
    return this.http
      .get<MedicalVisit[]>(
        this.urlMedicalVisit +
          `getmedicalvisits?status=in progress&doctorId=${id}`
      )
      .pipe(catchError(handleError([])));
  }

  public getMedicalVisitFinished(id: string): Observable<MedicalVisit[]> {
    return this.http
      .get<MedicalVisit[]>(
        this.urlMedicalVisit + `getmedicalvisits?status=finish&doctorId=${id}`
      )
      .pipe(catchError(handleError([])));
  }

  public getMadicalVisit(id: string): Observable<MedicalVisit> {
    return this.http
      .get<MedicalVisit>(this.urlMedicalVisit + `getmadicalvisit/${id}`)
      .pipe(catchError(handleError({} as MedicalVisit)));
  }

  public updateMedicalVisit(visit: MedicalVisit): Observable<any> {
    return this.http
      .put(this.urlMedicalVisit + `updatemedicalvisit`, visit)
      .pipe(catchError(handleError()));
  }
}
