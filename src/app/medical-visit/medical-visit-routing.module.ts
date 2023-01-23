import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../helpers/authGuard';
import { DetailsComponent } from './details/details.component';
import { MedicalVisitComponent } from './medical-visit.component';

const routes: Routes = [
  { path: '', component: MedicalVisitComponent },
  {
    path: 'details/:id',
    component: DetailsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['doctor'] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalVisitRoutingModule {}
