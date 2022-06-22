import { Component } from '@angular/core';
import { DrugResourceService } from 'src/libs/@api/api-resource/drug-resource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicament',
  templateUrl: './create-medicament.component.html',
  styleUrls: ['./create-medicament.component.scss'],
})
export class CreateMedicamentComponent {
  constructor( 
    private _drugResourceService: DrugResourceService,
    private router: Router
  ) {}
 

  createMedicament(payload:{title: string, description:string, dosage:string}){
    this._drugResourceService.createAction(payload).subscribe(()=> this.router.navigate(['medicaments']));
  }
}
