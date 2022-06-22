import { Component, OnInit } from '@angular/core';
import { APISchema } from 'src/libs/@api/api-objects/api-objects';
import { AllocationResourceService } from 'src/libs/@api/api-resource/allocation-resource.service';
import { LastSeenPatientsService } from 'src/app/utils/last-seen-patients.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _allocationResourceService: AllocationResourceService,
    private _lastSeenPatientService: LastSeenPatientsService
  ) {}

  allocations: APISchema.Allocation[] = [];
  upcomingAllocations: APISchema.Allocation[] = [];
  days: Date[] = [];
  lastSeenPatients: APISchema.Patient[] = [];

  ngOnInit(): void {
    this.getAllocations();

    for (let i = 0; i < 7; i++) {
      this.days.push(new Date(new Date().setDate(new Date().getDate() + i)));
    }

    this.lastSeenPatients = this._lastSeenPatientService.getLastSeenPatients();
  }
  sortUpcomingAllocations() {
    this.upcomingAllocations.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }
  getAllocations() {
    this._allocationResourceService.listAction().subscribe((value) => {
      this.allocations = value;
      this.filterAllocations();
      this.sortUpcomingAllocations();
    });
  }
  filterAllocations(today: Date = new Date()) {
    this.upcomingAllocations = this.allocations.filter(
      (data) =>
        new Date(data.date).getDate() === today.getDate() &&
        new Date(data.date).getMonth() === today.getMonth()
    );
  }

  dayChange(event: any) {
    this.filterAllocations(new Date(event.target.value));
    this.sortUpcomingAllocations();
  }
}
