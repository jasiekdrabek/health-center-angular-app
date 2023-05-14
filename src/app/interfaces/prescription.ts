import { Medicine } from './medicine';

export interface Prescription {
  _id: string;
  patientId: string;
  doctorId: string;
  code:number;
  medicines: Medicine[];
  date: string;
}
