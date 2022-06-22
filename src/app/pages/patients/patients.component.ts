import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { PatientResourceService } from 'src/libs/@api/api-resource/patient-resource.service';
import { APISchema } from 'src/libs/@api/api-objects/api-objects';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
  constructor(private _patientResourceService: PatientResourceService) {}
  ngOnInit(): void {
    this.getPatients();
  }

  patientList: APISchema.Patient[] = [];
  filteredList: APISchema.Patient[] = [];

  filterPatientList(e: any) {
 
      this.filteredList = this.patientList.filter((value) =>
        value.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
   
  }

  getPatients() {
    this._patientResourceService.listAction().subscribe((value) => {
      this.patientList = value;
      this.filteredList = value;
    });
  }
}
