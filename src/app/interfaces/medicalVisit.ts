import { Time } from '@angular/common';

export interface MedicalVisit {
  id: number;
  patientId: number;
  doctorId: number;
  details?: string;
  date: Time;
  prescriptionId?: number;
  medicalReferralId?: number;
}
