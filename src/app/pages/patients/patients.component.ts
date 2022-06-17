import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { PatientResourceService } from 'src/libs/@api/api-resource/patient-resource.service';
import { APISchema } from 'src/libs/@api/api-objects/api-objects';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {

  constructor(private _patientResourceService: PatientResourceService) { }
  
  patients$ = this._patientResourceService.listAction();
}
