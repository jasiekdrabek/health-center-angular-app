import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/authGuard';
import { LoginRedirect } from './helpers/loginRedirect';
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
    canActivate: [LoginRedirect],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'prescription',
    loadChildren: () =>
      import('./prescription/prescription.module').then(
        (m) => m.PrescriptionModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'medicalReferral',
    loadChildren: () =>
      import('./medical-referral/medical-referral.module').then(
        (m) => m.MedicalReferralModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'medicalVisit',
    loadChildren: () =>
      import('./medical-visit/medical-visit.module').then(
        (m) => m.MedicalVisitModule
      ),
    canActivate: [AuthGuard],
    data: { roles: ['doctor', 'nurse'] },
  },
  {
    path: 'medicines',
    loadChildren: () =>
      import('./medicines/medicines.module').then((m) => m.MedicinesModule),
    canActivate: [AuthGuard],
    data: { roles: ['doctor'] },
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
    canActivate: [AuthGuard],
    data: { roles: ['doctor', 'nurse'] },
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  { path: 'patientsList', loadChildren: () => import('./patients-list/patients-list.module').then(m => m.PatientsListModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
