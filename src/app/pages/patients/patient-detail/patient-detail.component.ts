import { Component, OnInit } from '@angular/core';
import { PatientResourceService } from 'src/libs/@api/api-resource/patient-resource.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AllocationResourceService } from 'src/libs/@api/api-resource/allocation-resource.service';
import { APISchema } from 'src/libs/@api/api-objects/api-objects';
import { LastSeenPatientsService } from 'src/app/utils/last-seen-patients.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss'],
})
export class PatientDetailComponent implements OnInit {
  constructor(
    private _patientResourceService: PatientResourceService,
    private _allocationResourceService: AllocationResourceService,
    private _lastSeenPatientService: LastSeenPatientsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  id: string = String(this._route.snapshot.paramMap.get('id'));
  patient$ = this._patientResourceService.detailAction(this.id);
  allocations: APISchema.Allocation[] = [];

  ngOnInit(): void {
    if (!Number(this._route.snapshot.paramMap.get('id'))) {
      this._router.navigate(['/patients']);
    }
    this.getAllocations();
    this._patientResourceService
      .detailAction(this.id)
      .subscribe((value) => this._lastSeenPatientService.addNew(value));
  }

  onDelete() {
    this._patientResourceService
      .deleteAction(Number(this.id))
      .subscribe(() => this._router.navigate(['/patients']));
  }

  getAllocations() {
    this._allocationResourceService.listAction().subscribe((value) => {
      this.allocations = value.filter(
        (allocation) => allocation.patientId == Number(this.id)
      );
      this.sortAllocations();
    });
  }

  deleteAllocation(id: number) {
    this._allocationResourceService.deleteAction(id).subscribe(() => {
      this.allocations = this.allocations.filter((all) => all.id != id);
    });
  }
  sortAllocations() {
    this.allocations.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }
  addDays(days: number, date: Date): Date {
    var futureDate = new Date(date);
    futureDate.setDate(futureDate.getDate() + days);
    return futureDate;
  }

  completeAllocation(id: number) {
    this.allocations.filter((value) => {
      if (value.id == id) {
        value.date = this.addDays(7, value.date);
        this._allocationResourceService
          .updateAction(String(value.id), value)
          .subscribe();
      }
    });
    this.sortAllocations();
  }
}
