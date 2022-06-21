import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientAllocationComponent } from './patient-allocation/patient-allocation.component';
import { NgSelectModule } from '@ng-select/ng-select';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { PatientFormComponent } from '../../components/patient-form/patient-form.component';


@NgModule({
  declarations: [
    CreatePatientComponent,
    PatientsComponent,
    PatientDetailComponent,
    PatientAllocationComponent,
    EditPatientComponent,
    PatientFormComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxMaterialTimepickerModule
  ]
})
export class PatientsModule { }
