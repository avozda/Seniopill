import { Component, OnInit } from '@angular/core';
import { DrugResourceService } from 'src/libs/@api/api-resource/drug-resource.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-medicament',
  templateUrl: './edit-medicament.component.html',
  styleUrls: ['./edit-medicament.component.css'],
})
export class EditMedicamentComponent implements OnInit {
  constructor(
    private _drugResourceService: DrugResourceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  id: string = String(this.route.snapshot.paramMap.get('id'));
  drugData$ = this._drugResourceService.detailAction(this.id)

  ngOnInit(): void {
    if (!Number(this.route.snapshot.paramMap.get('id'))) {
      this.router.navigate(['/medicaments']);
    }
  }

  updateDrug(payload:{title: string, description: string, dosage:string}) {
    this._drugResourceService
      .updateAction(this.id,payload)
      .subscribe(() => this.router.navigate(['medicaments', this.id]));
  }
}
