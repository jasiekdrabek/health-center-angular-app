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
        pesel: '93071534761',
        role: 'doctor',
      },
      {
        id: 1,
        login: 'nurseZofia',
        password:
          '3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2',
        name: 'Zofia Drabek',
        pesel: '82011481283',
        role: 'nurse',
      },
      {
        id: 2,
        login: 'patientMama',
        password:
          '3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2',
        name: 'Agnieszka Drabek',
        pesel: '56050374312',
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
        dose: 900,
        activeSubstance: 'a bo ja wiem',
      },
      {
        id: 2,
        name: 'apap',
        dose: 800,
        activeSubstance: 'a bo ja wiem',
      },
      {
        id: 3,
        name: 'apap',
        dose: 700,
        activeSubstance: 'a bo ja wiem',
      },
      {
        id: 4,
        name: 'apap',
        dose: 600,
        activeSubstance: 'a bo ja wiem',
      },
      {
        id: 5,
        name: 'apap',
        dose: 500,
        activeSubstance: 'a bo ja wiem',
      },
      {
        id: 6,
        name: 'apap',
        dose: 400,
        activeSubstance: 'a bo ja wiem',
      },
      {
        id: 7,
        name: 'apap',
        dose: 300,
        activeSubstance: 'a bo ja wiem',
      },
      {
        id: 8,
        name: 'apap',
        dose: 200,
        activeSubstance: 'a bo ja wiem',
      },
    ];

    const nowDate = new Date();
    const date =
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
        patient: users[2],
        prescription: prescriptions[0],
        medicalReferral: medicalReferrals[0],
        date: date,
        status: 'finish',
      },
      {
        id: 1,
        doctorId: 0,
        patient: users[2],
        prescription: prescriptions[0],
        medicalReferral: medicalReferrals[0],
        date: date,
        status: 'finish',
      },
      {
        id: 2,
        doctorId: 0,
        patient: users[2],
        prescription: prescriptions[0],
        medicalReferral: medicalReferrals[0],
        date: '22.01.2023',
        status: 'finish',
      },
    ];

    return { users, medicines, prescriptions, medicalReferrals, medicalVisits };
  }

  genId(user: User[] | MedicalVisit[] | MedicalReferral[] | Prescription[]): number {
    return user.length > 0 ? Math.max(...user.map((user) => user.id)) + 1 : 0;
  }
}
