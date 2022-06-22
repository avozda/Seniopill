import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicamentsComponent } from './medicaments.component';
import { CreateMedicamentComponent } from './create-medicament/create-medicament.component';
import { MedicamentDetailComponent } from './medicament-detail/medicament-detail.component';
import { EditMedicamentComponent } from './edit-medicament/edit-medicament.component';
const routes: Routes = [
  { path: '', component: MedicamentsComponent },
  { path: 'create', component: CreateMedicamentComponent },
  { path: ':id', component: MedicamentDetailComponent },
  { path: ':id/edit', component: EditMedicamentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicamentsRoutingModule { }
