export interface MedicalReferral {
  _id: string;
  doctorId: string;
  patientId: string;
  code: number;
  toWhichSpecialistDoctor: string;
  date:string
}
