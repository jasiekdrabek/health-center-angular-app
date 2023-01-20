import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalVisitRoutingModule } from './medical-visit-routing.module';
import { MedicalVisitComponent } from './medical-visit.component';


@NgModule({
  declarations: [
    MedicalVisitComponent
  ],
  imports: [
    CommonModule,
    MedicalVisitRoutingModule
  ]
})
export class MedicalVisitModule { }
