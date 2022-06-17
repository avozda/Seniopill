import { Component, OnInit } from '@angular/core';
import { DrugResourceService } from 'src/libs/@api/api-resource/drug-resource.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-medicament-detail',
  templateUrl: './medicament-detail.component.html',
  styleUrls: ['./medicament-detail.component.css'],
})
export class MedicamentDetailComponent implements OnInit {
  constructor(
    private _drugResourceService: DrugResourceService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  id: string = String(this._route.snapshot.paramMap.get('id'));
  drug$ = this._drugResourceService.detailAction(this.id);

  ngOnInit(): void {
    if (!Number(this._route.snapshot.paramMap.get('id'))) {
      this._router.navigate(['/patients']);
    }
  }
}
