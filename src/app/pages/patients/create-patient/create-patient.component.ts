import { Component } from '@angular/core';
import { PatientResourceService } from 'src/libs/@api/api-resource/patient-resource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss'],
})
export class CreatePatientComponent {
  constructor(
    private _patientResourceService: PatientResourceService,
    private router: Router
  ) {}

  createPatient(payload:{name: string, sex:string,description:string, room: number, bed: number, dateOfBirth: string}) {
    this._patientResourceService
      .createAction(payload)
      .subscribe(() => this.router.navigate(['/patients']));
  }
}
