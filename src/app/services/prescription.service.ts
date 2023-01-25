import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { handleError } from '../helpers/handleError';
import { Prescription } from '../interfaces/prescription';

@Injectable({
  providedIn: 'any',
})
export class PrescriptionService {
  private prescriptionUrl = 'api/prescriptions';
  constructor(private http: HttpClient) {}

  public getUserPrescriptions(id: number): Observable<Prescription[]> {
    return this.http.get<Prescription[]>(
      this.prescriptionUrl + `?patientId=${id}`
    ).pipe(catchError(handleError<Prescription[]>([])));
  }
}
