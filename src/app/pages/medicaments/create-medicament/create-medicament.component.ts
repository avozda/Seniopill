import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DrugResourceService } from 'src/libs/@api/api-resource/drug-resource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicament',
  templateUrl: './create-medicament.component.html',
  styleUrls: ['./create-medicament.component.css'],
})
export class CreateMedicamentComponent {
  constructor(
    private _formBuilder: FormBuilder,
    private _drugResourceService: DrugResourceService,
    private router: Router
  ) {}

  formGroup = this._formBuilder.group({
    title: '',
    description: '',
    dosage: '',
  });

  createPatient(title: string, description:string, dosage:string ){
    this._drugResourceService.createAction({title,description, dosage}).subscribe(()=> this.router.navigate(['/medicaments']));
  }
}
