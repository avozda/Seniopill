import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientAllocationComponent } from './patient-allocation/patient-allocation.component';

const routes: Routes = [
  { path: '', component: PatientsComponent },
  { path: 'create', component: CreatePatientComponent },
  { path: ':id', component: PatientDetailComponent },
  { path: ':id/allocate', component: PatientAllocationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
