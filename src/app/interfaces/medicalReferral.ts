export interface MedicalReferral {
  id: number;
  doctorId: number;
  patientId: number;
  code: number;
  toWhichSpecialistDoctor: string;
  date:string
}
