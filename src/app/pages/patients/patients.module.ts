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
import { DeleteDialogModule } from 'src/app/components/delete-dialog/delete-dialog.module';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    CreatePatientComponent,
    PatientsComponent,
    PatientDetailComponent,
    PatientAllocationComponent,
    EditPatientComponent,
    PatientFormComponent,
   
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxMaterialTimepickerModule,
    DeleteDialogModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatCardModule
  ]
})
export class PatientsModule { }
