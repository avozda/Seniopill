import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'patients', loadChildren: () => import('./pages/patients/patients.module').then(m => m.PatientsModule) },
  { path: 'medicaments', loadChildren: () => import('./pages/medicaments/medicaments.module').then(m => m.MedicamentsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
