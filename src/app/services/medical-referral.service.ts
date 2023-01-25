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

  getUserMedicalReferrals(id: number): Observable<MedicalReferral[]> {
    return this.http
      .get<MedicalReferral[]>(this.medicalReferralUrl + `?patientId=${id}`)
      .pipe(catchError(handleError<MedicalReferral[]>([])));
  }
}
