import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePatientRoutingModule } from './create-patient-routing.module';
import { CreatePatientComponent } from './create-patient.component';


@NgModule({
  declarations: [
    CreatePatientComponent
  ],
  imports: [
    CommonModule,
    CreatePatientRoutingModule
  ]
})
export class CreatePatientModule { }
