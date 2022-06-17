import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PatientResourceService } from 'src/libs/@api/api-resource/patient-resource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css'],
})
export class CreatePatientComponent {
  constructor(
    private _formBuilder: FormBuilder,
    private _patientResourceService: PatientResourceService,
    private router: Router
  ) {}

  formGroup = this._formBuilder.group({
    name: '',
    room: null,
    bed: null,
    dateOfBirth: '',
  });

  createPatient(name: string, room: number, bed: number, dateOfBirth: '') {
    this._patientResourceService
      .createAction({ name, room, bed, dateOfBirth })
      .subscribe(() => this.router.navigate(['/patients']));
  }
}
