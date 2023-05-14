import { MedicalReferral } from './medicalReferral';
import { Prescription } from './prescription';
import { User } from './user';

export interface MedicalVisit {
  _id: string;
  patient: User;
  doctorId: string;
  details?: string;
  date: string;
  prescription?: Prescription | null;
  medicalReferral?: MedicalReferral | null;
  status:string;
}
