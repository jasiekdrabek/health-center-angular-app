import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { handleError } from '../helpers/handleError';
import { MedicalReferral } from '../interfaces/medicalReferral';

@Injectable()
export class MedicalReferralService {
  private medicalReferralUrl = 'https://health-center-angular-app-back.herokuapp.com/api/';

  constructor(private http: HttpClient) {}



  public getUserMedicalReferrals(id: string): Observable<MedicalReferral[]> {
    return this.http
      .get<MedicalReferral[]>(
        this.medicalReferralUrl + `getusermedicalreferrals/${id}`
      )
      .pipe(catchError(handleError<MedicalReferral[]>([])));
  }
}
