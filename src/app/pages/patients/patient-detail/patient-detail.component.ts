import { Component, OnInit} from '@angular/core';
import { PatientResourceService } from 'src/libs/@api/api-resource/patient-resource.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  constructor(
    private _patientResourceService: PatientResourceService, 
    private _route:ActivatedRoute,
    private _router: Router) { }

  id: string = String(this._route.snapshot.paramMap.get("id"))
  patient$ = this._patientResourceService.detailAction(this.id);

  ngOnInit(): void {
    if (!Number(this._route.snapshot.paramMap.get('id'))) {
        this._router.navigate(['/patients']);
    }
  }

  onDelete(){
    this._patientResourceService.deleteAction(Number(this.id)).subscribe(()=>this._router.navigate(['/patients']))
  }
}
