import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MedicalVisitService } from 'src/app/services/medical-visit.service';
import { MedicalVisit } from 'src/app/interfaces/medicalVisit';
import { Medicine } from 'src/app/interfaces/medicine';
import { MedicinesService } from 'src/app/services/medicines.service';
import { MatTableDataSource } from '@angular/material/table';
import { Prescription } from 'src/app/interfaces/prescription';
import { randomInteger } from 'src/app/helpers/randomInt';
import { PrescriptionService } from 'src/app/services/prescription.service';
import { MedicalReferralService } from 'src/app/services/medical-referral.service';
import { MedicalReferral } from 'src/app/interfaces/medicalReferral';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  visit!: MedicalVisit;
  selectedMedicine!: Medicine;
  selectedQuantity!: number;
  quantities!: number[];
  medicines!: Medicine[];
  dataSource!: MatTableDataSource<Medicine>;
  isRateLimitReached = false;
  displayedColumns: string[] = ['name', 'dose', 'activeSubstance', 'quantity'];
  displayedColumnsWithDelete: string[] = [...this.displayedColumns, 'actions'];
  prescriptionId: number | undefined;
  medicalReferralId: number | undefined;
  toWhichSpecialistDoctor!: string;
  constructor(
    private prescriptionService: PrescriptionService,
    private medicalReferralService: MedicalReferralService,
    private route: ActivatedRoute,
    private medicalVisitService: MedicalVisitService,
    private medicinesService: MedicinesService,
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getVisit();
    this.medicinesService.getAll().subscribe((medicines) => {
      this.medicines = medicines;
    });
    this.quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  getVisit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.medicalVisitService.getMadicalVisit(id).subscribe((visit) => {
      this.visit = visit;
      if (this.visit.prescription) {
        this.dataSource = new MatTableDataSource(visit.prescription?.medicines);
        this.isRateLimitReached = true;
        this.prescriptionId = this.visit.prescription.id;
      }
      if (this.visit.medicalReferral) {
        this.medicalReferralId = this.visit.medicalReferral.id;
        this.toWhichSpecialistDoctor =
          this.visit.medicalReferral.toWhichSpecialistDoctor;
      }
    });
  }

  deleteClick(medicineToDelete: Medicine) {
    if (this.visit.prescription?.medicines) {
      this.prescriptionId = this.visit.prescription.id;
      this.visit.prescription.medicines =
        this.visit.prescription?.medicines.filter(
          (medicine) => medicine.id != medicineToDelete.id
        ) as Medicine[];
      if (this.visit.prescription.medicines.length == 0)
        this.isRateLimitReached = false;
      this.prescriptionId = this.visit.prescription.id;
      this.dataSource = new MatTableDataSource(
        this.visit.prescription.medicines
      );
    }
  }

  add(medicine: Medicine, quantity: number) {
    if (!medicine || !quantity) return;
    this.isRateLimitReached = true;
    medicine = { ...medicine, quantity };
    if (this.visit.prescription) {
      this.visit.prescription?.medicines.push(medicine);
    } else {
      const nowDate = new Date();
      const date =
        nowDate.getDate() +
        '.' +
        (nowDate.getMonth() + 1) +
        '.' +
        nowDate.getFullYear();
      this.visit.prescription = {
        patientId: this.visit.patient.id,
        doctorId: this.visit.doctorId,
        date: date,
        code: randomInteger(1000, 9999),
        medicines: [medicine],
      } as Prescription;
    }
    this.dataSource = new MatTableDataSource(
      this.visit.prescription?.medicines
    );
  }

  save() {
    if(this.visit.details == undefined) return
    this.visit.status = 'finish';
    if (typeof this.medicalReferralId == 'number') {
      if (this.toWhichSpecialistDoctor) {
        if (this.visit.medicalReferral)
          this.visit.medicalReferral.toWhichSpecialistDoctor =
            this.toWhichSpecialistDoctor;
      } else {
        if (this.visit.medicalReferral) this.visit.medicalReferral = undefined;
      }
    } else {
      if (this.toWhichSpecialistDoctor) {
        const nowDate = new Date();
        const date =
          nowDate.getDate() +
          '.' +
          (nowDate.getMonth() + 1) +
          '.' +
          nowDate.getFullYear();
        const medicalReferral = {
          doctorId: this.visit.doctorId,
          patientId: this.visit.patient.id,
          date: date,
          code: randomInteger(1000, 9999),
          toWhichSpecialistDoctor: this.toWhichSpecialistDoctor,
        } as MedicalReferral;
        this.visit.medicalReferral = medicalReferral;
      }
    }
    this.medicalVisitService.updateMedicalVisit(this.visit).subscribe();
    if (typeof this.prescriptionId == 'number') {
      if (this.visit.prescription) {
        this.prescriptionService
          .updatePrescription(this.visit.prescription)
          .subscribe();
      } else {
        this.prescriptionService
          .deletePrescription(this.prescriptionId)
          .subscribe();
      }
    } else {
      if (this.visit.prescription) {
        this.prescriptionService
          .addPrescription(this.visit.prescription)
          .subscribe();
      }
    }

    if (typeof this.medicalReferralId == 'number') {
      if (this.toWhichSpecialistDoctor) {
        this.medicalReferralService
          .getMedicalReferral(this.medicalReferralId)
          .subscribe((referral) => {
            var medicalReferral = referral;
            medicalReferral.toWhichSpecialistDoctor =
              this.toWhichSpecialistDoctor;
            this.medicalReferralService
              .updaterMedicalReferral(medicalReferral)
              .subscribe();
          });
      } else {
        this.medicalReferralService
          .deleteMedicalReferral(this.medicalReferralId)
          .subscribe();
      }
    } else {
      if (this.visit.medicalReferral) {
        this.medicalReferralService
          .addMedicalReferral(this.visit.medicalReferral)
          .subscribe();
      }
    }
  }
}
