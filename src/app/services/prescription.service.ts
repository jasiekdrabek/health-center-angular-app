import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { handleError } from '../helpers/handleError';
import { Prescription } from '../interfaces/prescription';

@Injectable()
export class PrescriptionService {
  private prescriptionUrl = 'https://health-center-angular-app-back.herokuapp.com/api/';
  constructor(private http: HttpClient) {}

  public getUserPrescriptions(id: string): Observable<Prescription[]> {
    return this.http
      .get<Prescription[]>(this.prescriptionUrl + `getuserprescriptions/${id}`)
      .pipe(catchError(handleError<Prescription[]>([])));
  }
}
