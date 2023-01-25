import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { handleError } from '../helpers/handleError';
import { MedicalReferral } from '../interfaces/medicalReferral';

@Injectable({
  providedIn: 'any',
})
export class MedicalReferralService {
  private medicalReferralUrl = 'api/medicalReferrals';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getMedicalReferral(id: number): Observable<MedicalReferral> {
    return this.http
      .get<MedicalReferral>(this.medicalReferralUrl + `/${id}`)
      .pipe(catchError(handleError<MedicalReferral>()));
  }

  getUserMedicalReferrals(id: number): Observable<MedicalReferral[]> {
    return this.http
      .get<MedicalReferral[]>(this.medicalReferralUrl + `?patientId=${id}`)
      .pipe(catchError(handleError<MedicalReferral[]>([])));
  }

  updaterMedicalReferral(medicalReferral: MedicalReferral): Observable<any> {
    return this.http
      .put(this.medicalReferralUrl, medicalReferral, this.httpOptions)
      .pipe(catchError(handleError()));
  }

  addMedicalReferral(
    medicalReferral: MedicalReferral
  ): Observable<MedicalReferral> {
    return this.http
      .post<MedicalReferral>(
        this.medicalReferralUrl,
        medicalReferral,
        this.httpOptions
      )
      .pipe(catchError(handleError<MedicalReferral>()));
  }

  deleteMedicalReferral(id: number): Observable<MedicalReferral> {
    return this.http
      .delete<MedicalReferral>(this.medicalReferralUrl + `${id}`)
      .pipe(catchError(handleError<MedicalReferral>()));
  }
}
