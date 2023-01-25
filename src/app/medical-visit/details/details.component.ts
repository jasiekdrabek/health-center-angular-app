import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MedicalVisitService } from 'src/app/services/medical-visit.service';
import { MedicalVisit } from 'src/app/interfaces/medicalVisit';
import { Medicine } from 'src/app/interfaces/medicine';
import { MedicinesService } from 'src/app/services/medicines.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnChanges {
  visit! : MedicalVisit
  selectedMedicine!: Medicine;
  selectedQuantity!: number;
  quantities!: number [];
  medicines!: Medicine[];
  dataSource!: MatTableDataSource<Medicine>; 
  isRateLimitReached = false;  
  displayedColumns: string[] = ['name', 'dose', 'activeSubstance', 'quantity'];
  displayedColumnsWithDelete: string[] = [...this.displayedColumns,'actions']
  constructor( 
    private route: ActivatedRoute,
    private medicalVisitService: MedicalVisitService,
    private medicinesService: MedicinesService,    
    private location: Location){}

    goBack(): void {
      this.location.back();
    }

    ngOnInit(): void {
      this.getVisit()
      this.medicinesService.getAll().subscribe(medicines => {this.medicines = medicines});
      this.quantities =[1,2,3,4,5,6,7,8,9,10]
    }

    ngOnChanges(changes: SimpleChanges){
      console.log(changes)
    }

    getVisit():void{
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.medicalVisitService.getMadicalVisit(id).subscribe(visit => {this.visit = visit;
      this.dataSource = new MatTableDataSource(visit.prescription?.medicines);
      this.isRateLimitReached = true})
    }

    deleteClick(medicineToDelete: Medicine){
      if(this.visit.prescription?.medicines){
      this.visit.prescription.medicines = this.visit.prescription?.medicines.filter(medicine => medicine.id != medicineToDelete.id) as Medicine[] 
      if(this.visit.prescription.medicines.length == 0) this.isRateLimitReached = false;
      this.dataSource = new MatTableDataSource(this.visit.prescription.medicines);
      }
    }

    add(medicine : Medicine, quantity: number){
      if(!medicine || !quantity) return
      this.isRateLimitReached = true
      medicine = {...medicine,quantity}
      this.visit.prescription?.medicines.push(medicine)
      this.dataSource = new MatTableDataSource(this.visit.prescription?.medicines);
    }

    save(){

    }
}


