import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalVisitComponent } from './medical-visit.component';

const routes: Routes = [{ path: '', component: MedicalVisitComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalVisitRoutingModule { }
