import { Component, OnInit } from '@angular/core';
import { PatientResourceService } from 'src/libs/@api/api-resource/patient-resource.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  constructor(private _patientResourceService: PatientResourceService,
    private router: Router,
    private route: ActivatedRoute) { }

    id: string = String(this.route.snapshot.paramMap.get('id'));
    patientData$ = this._patientResourceService.detailAction(this.id)

  ngOnInit(): void {
    if (!Number(this.route.snapshot.paramMap.get('id'))) {
      this.router.navigate(['/patients']);
    }
  }

  updatePatient(payload:{name: string, room: number, bed: number, dateOfBirth: string}) {
    this._patientResourceService
      .updateAction(this.id,payload)
      .subscribe(() => this.router.navigate(['patients', this.id]));
  }

}
