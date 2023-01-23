import { MedicalReferral } from './medicalReferral';
import { Prescription } from './prescription';
import { User } from './user';

export interface MedicalVisit {
  id: number;
  patient: User;
  doctorId: number;
  details?: string;
  date: string;
  prescription?: Prescription;
  medicalReferral?: MedicalReferral;
  status:string;
}
