import { Medicine } from './medicine';

export interface Prescription {
  id: number;
  patientId: number;
  doctorId: number;
  code:number;
  medicines: Medicine[];
  date: string;
}
