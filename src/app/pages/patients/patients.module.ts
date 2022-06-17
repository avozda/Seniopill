import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientAllocationComponent } from './patient-allocation/patient-allocation.component';


@NgModule({
  declarations: [
    CreatePatientComponent,
    PatientsComponent,
    PatientDetailComponent,
    PatientAllocationComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PatientsModule { }
