import { Injectable } from '@angular/core';
import { MedicalReferral } from '../interfaces/medicalReferral';
import { MedicalVisit } from '../interfaces/medicalVisit';
import { Medicine } from '../interfaces/medicine';
import { Prescription } from '../interfaces/prescription';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  createDb() {
    const users: User[] = [
      {
        id: 0,
        login: 'drJan',
        password:
          '3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2',
        name: 'Jan Drabek',
        pesel: '97230410714',
        role: 'doctor',
      },
      {
        id: 1,
        login: 'nurseZofia',
        password:
          '3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2',
        name: 'Zofia Drabek',
        pesel: '93032310615',
        role: 'nurse',
      },
      {
        id: 2,
        login: 'patientMama',
        password:
          '3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2',
        name: 'Agnieszka Drabek',
        pesel: '69052523197',
        role: 'patient',
      },
    ];

    const medicines: Medicine[] = [
      {
        id: 0,
        name: 'apap',
        dose: 1000,
        activeSubstance: 'a bo ja wiem',
      },
      {
        id: 1,
        name: 'apap',
        dose: 1000,
        activeSubstance: 'a bo ja wiem',
      },
      {
        id: 2,
        name: 'apap',
        dose: 1000,
        activeSubstance: 'a bo ja wiem',
      },
      {
        id: 3,
        name: 'apap',
        dose: 1000,
        activeSubstance: 'a bo ja wiem',
      },
      {
        id: 4,
        name: 'apap',
        dose: 1000,
        activeSubstance: 'a bo ja wiem',
      },
      {
        id: 5,
        name: 'apap',
        dose: 1000,
        activeSubstance: 'a bo ja wiem',
      },
      {
        id: 6,
        name: 'apap',
        dose: 1000,
        activeSubstance: 'a bo ja wiem',
      },
      {
        id: 7,
        name: 'apap',
        dose: 1000,
        activeSubstance: 'a bo ja wiem',
      },
      {
        id: 8,
        name: 'apap',
        dose: 1000,
        activeSubstance: 'a bo ja wiem',
      },
    ];

    var nowDate = new Date();
    var date =
      nowDate.getDate() +
      '.' +
      (nowDate.getMonth() + 1) +
      '.' +
      nowDate.getFullYear();
    const prescriptions: Prescription[] = [
      {
        id: 0,
        doctorId: 0,
        patientId: 2,
        code: 1638,
        medicines: [
          {
            id: 0,
            name: 'apap',
            dose: 1000,
            activeSubstance: 'a bo ja wiem',
            quantity: 4,
          },
          {
            id: 2,
            name: 'apap',
            dose: 1000,
            activeSubstance: 'a bo ja wiem',
            quantity: 5,
          },
        ],
        date: date,
      },
    ];

    const medicalReferrals: MedicalReferral[] = [
      {
        id: 0,
        doctorId: 0,
        patientId: 2,
        code: 3520,
        toWhichSpecialistDoctor: 'cardiologist',
        date: date,
      },
    ];

    const medicalVisits: MedicalVisit[] = [
      {
        id: 0,
        doctorId: 0,
        patientId: 2,
        prescription: prescriptions[0],
        medicalReferral: medicalReferrals[0],
        date: date,
        status: 'finish',
      },
    ];

    return { users, medicines, prescriptions, medicalReferrals, medicalVisits };
  }

  genId(user: User[]): number {
    return user.length > 0 ? Math.max(...user.map((user) => user.id)) + 1 : 0;
  }
}
