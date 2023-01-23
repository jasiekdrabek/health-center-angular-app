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
      {
        id: 3,
        login: 'patientTata',
        password:
          '3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2',
        name: 'Stanisław Drabek',
        pesel: '65040292716',
        role: 'patient',
      },
      {
        id: 4,
        login: 'doctorRadek',
        password:
          '3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2',
        name: 'Radosław Herbut',
        pesel: '66022355212',
        role: 'doctor',
      },
      {
        id: 5,
        login: 'nurseJola',
        password:
          '3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2',
        name: 'Jola Błaż',
        pesel: '72062849824',
        role: 'nurse',
      },
    ];

    const medicines: Medicine[] = [
      {
        id: 0,
        name: 'Abilify',
        dose: 10,
        activeSubstance: 'arypiprazol',
      },
      {
        id: 1,
        name: 'Abilify',
        dose: 15,
        activeSubstance: 'arypiprazol',
      },
      {
        id: 2,
        name: 'Abilify',
        dose: 30,
        activeSubstance: 'arypiprazol',
      },
      {
        id: 3,
        name: 'Cabometyx',
        dose: 20,
        activeSubstance: 'kabozantynib',
      },
      {
        id: 4,
        name: 'Cabometyx',
        dose: 40,
        activeSubstance: 'kabozantynib',
      },
      {
        id: 5,
        name: 'Cabometyx',
        dose: 60,
        activeSubstance: 'kabozantynib',
      },
      {
        id: 6,
        name: 'Gasprid ',
        dose: 5,
        activeSubstance: 'cisapryd',
      },
      {
        id: 7,
        name: 'Gasprid ',
        dose: 10,
        activeSubstance: 'cisapryd',
      },
      {
        id: 8,
        name: 'Pabi-Dexamethason',
        dose: 0.5,
        activeSubstance: 'deksametazon',
      },
      {
        id: 9,
        name: 'Pabi-Dexamethason',
        dose: 1,
        activeSubstance: 'deksametazon',
      },
      {
        id: 10,
        name: 'Pabi-Dexamethason',
        dose: 4,
        activeSubstance: 'deksametazon',
      },
      {
        id: 11,
        name: 'Pabi-Dexamethason',
        dose: 8,
        activeSubstance: 'deksametazon',
      },
      {
        id: 12,
        name: 'Pabi-Dexamethason',
        dose: 20,
        activeSubstance: 'deksametazon',
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
            ...medicines[2],
            quantity: 4,
          },
          {
            ...medicines[5],
            quantity: 5,
          },
        ],
        date: date,
      },
      {
        id:1,
        doctorId:0,
        patientId:2,
        code:3607,
        medicines:[{
          ...medicines[6],
          quantity: 2,
        }
        ],
        date:date
      }
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
      {
        id: 1,
        doctorId: 0,
        patientId: 2,
        code: 6482,
        toWhichSpecialistDoctor: 'laryngologist',
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
        prescription: prescriptions[1],
        date: date,
        status: 'finish',
      },
      {
        id: 2,
        doctorId: 0,
        patient: users[2],
        medicalReferral: medicalReferrals[1],
        date: date,
        status: 'finish',
      },
      {
        id: 3,
        doctorId: 0,
        patient: users[5],
        date: date,
        status: 'in progress',
      },
      {
        id: 3,
        doctorId: 0,
        patient: users[5],
        date: date,
        status: 'in progress',
      },
      {
        id: 4,
        doctorId: 0,
        patient: users[1],
        date: date,
        status: 'in progress',
      },
      {
        id: 5,
        doctorId: 0,
        patient: users[4],
        date: date,
        status: 'in progress',
      },
    ];

    return { users, medicines, prescriptions, medicalReferrals, medicalVisits };
  }

  genId(user: User[] | MedicalVisit[] | MedicalReferral[] | Prescription[]): number {
    return user.length > 0 ? Math.max(...user.map((user) => user.id)) + 1 : 0;
  }
}
