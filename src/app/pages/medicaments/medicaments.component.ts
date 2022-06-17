import { Component, OnInit } from '@angular/core';
import { DrugResourceService } from 'src/libs/@api/api-resource/drug-resource.service';

@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']
})
export class MedicamentsComponent {

  constructor(private _drugResourceService: DrugResourceService) { }

  drugList$ = this._drugResourceService.listAction()
}
