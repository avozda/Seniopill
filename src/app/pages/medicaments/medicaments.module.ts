import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicamentsRoutingModule } from './medicaments-routing.module';
import { MedicamentsComponent } from './medicaments.component';
import { MedicamentDetailComponent } from './medicament-detail/medicament-detail.component';
import { CreateMedicamentComponent } from './create-medicament/create-medicament.component';
import { EditMedicamentComponent } from './edit-medicament/edit-medicament.component';
import { MedicamentFormComponent } from '../../components/medicament-form/medicament-form.component'
import { DeleteDialogModule } from 'src/app/components/delete-dialog/delete-dialog.module';


@NgModule({
  declarations: [
    MedicamentsComponent,
    MedicamentDetailComponent,
    CreateMedicamentComponent,
    EditMedicamentComponent,
    MedicamentFormComponent,
  ],
  imports: [
    CommonModule,
    MedicamentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DeleteDialogModule
  ]
})
export class MedicamentsModule { }
