import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Prescription } from '../interfaces/prescription';

@Injectable({
  providedIn: 'root',
})
export class PrescriptionService {
  private prescriptionUrl = 'api/prescriptions';
  constructor(private http: HttpClient) {}

  public getUserPrescriptions(id: number): Observable<Prescription[]> {
    return this.http.get<Prescription[]>(
      this.prescriptionUrl + `?patientId=${id}`
    );
  }
}
