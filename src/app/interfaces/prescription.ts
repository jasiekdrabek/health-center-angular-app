import { Time } from '@angular/common';
import { Medicine } from './medicine';

export interface Prescription {
  id: number;
  patientId: number;
  doctorId: number;
  medicines: Medicine[];
  quantitys: Number[];
  date: Time;
}
