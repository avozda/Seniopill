import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicamentsRoutingModule } from './medicaments-routing.module';
import { MedicamentsComponent } from './medicaments.component';
import { MedicamentDetailComponent } from './medicament-detail/medicament-detail.component';
import { CreateMedicamentComponent } from './create-medicament/create-medicament.component';
@NgModule({
  declarations: [
    MedicamentsComponent,
    MedicamentDetailComponent,
    CreateMedicamentComponent
  ],
  imports: [
    CommonModule,
    MedicamentsRoutingModule
  ]
})
export class MedicamentsModule { }
