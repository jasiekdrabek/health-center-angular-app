import { MedicalReferral } from './medicalReferral';
import { Prescription } from './prescription';

export interface MedicalVisit {
  id: number;
  patientId: number;
  doctorId: number;
  details?: string;
  date: string;
  prescription?: Prescription;
  medicalReferral?: MedicalReferral;
  status:string;
}
