import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicamentsComponent } from './medicaments.component';
import { CreateMedicamentComponent } from './create-medicament/create-medicament.component';
import { MedicamentDetailComponent } from './medicament-detail/medicament-detail.component';

const routes: Routes = [
  { path: '', component: MedicamentsComponent },
  { path: 'create', component: CreateMedicamentComponent },
  { path: ':id', component: MedicamentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicamentsRoutingModule { }
