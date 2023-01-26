import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { handleError } from '../helpers/handleError';
import { Prescription } from '../interfaces/prescription';

@Injectable()
export class PrescriptionService {
  private prescriptionUrl = 'api/prescriptions';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  public getUserPrescriptions(id: number): Observable<Prescription[]> {
    return this.http
      .get<Prescription[]>(this.prescriptionUrl + `?patientId=${id}`)
      .pipe(catchError(handleError<Prescription[]>([])));
  }

  updatePrescription(prescription: Prescription): Observable<any> {
    return this.http
      .put(this.prescriptionUrl, prescription, this.httpOptions)
      .pipe(catchError(handleError()));
  }

  addPrescription(prescription: Prescription): Observable<Prescription> {
    return this.http
      .post<Prescription>(this.prescriptionUrl, prescription, this.httpOptions)
      .pipe(catchError(handleError<Prescription>()));
  }

  deletePrescription(id: number): Observable<Prescription> {
    return this.http
      .delete<Prescription>(this.prescriptionUrl + `/${id}`,this.httpOptions)
      .pipe(catchError(handleError<Prescription>()));
  }
}
