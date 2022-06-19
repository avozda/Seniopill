import { Component, OnInit } from '@angular/core';
import { APISchema } from 'src/libs/@api/api-objects/api-objects';
import { DrugResourceService } from 'src/libs/@api/api-resource/drug-resource.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Time } from '@angular/common';
import { AllocationResourceService } from 'src/libs/@api/api-resource/allocation-resource.service';

@Component({
  selector: 'app-patient-allocation',
  templateUrl: './patient-allocation.component.html',
  styleUrls: ['./patient-allocation.component.css'],
})
export class PatientAllocationComponent implements OnInit {
  constructor(
    private _drugResourceService: DrugResourceService,
    private _allocationResourceService: AllocationResourceService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) {}

  formGroup = this._formBuilder.group({
    hours: Number,
    minutes: Number,
    dosage: '',
    notify: false,
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false,
    Sun: false,
  });

  id: string = String(this._route.snapshot.paramMap.get('id'));
  drugs: APISchema.Drug[] = [];
  selectedDrug: APISchema.Drug = this.drugs[0];

  ngOnInit(): void {
    if (!Number(this._route.snapshot.paramMap.get('id'))) {
      this._router.navigate(['/patients']);
    }

    this.getAllDrugs();
  }

  getAllDrugs() {
    this._drugResourceService.listAction().subscribe((value) => {
      this.drugs = value;
    });
  }

  onDrugChange() {
    this.formGroup.setValue({
      ...this.formGroup.value,
      dosage: this.selectedDrug.dosage,
    });
  }
  getNextDayOfTheWeek(
    dayName: string,
    excludeToday = true,
    refDate = new Date()
  ): Date {
    const dayOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].indexOf(
      dayName.slice(0, 3).toLowerCase()
    );
    refDate.setHours(0, 0, 0, 0);
    refDate.setDate(
      refDate.getDate() +
        +!!excludeToday +
        ((dayOfWeek + 7 - refDate.getDay() - +!!excludeToday) % 7)
    );
    return refDate;
  }

  createAllocation(
    patientId: string,
    drugId: number,
    hours: number,
    minutes: number,
    dosage: string,
    notify: boolean,
    Mon: boolean,
    Tue: boolean,
    Wed: boolean,
    Thu: boolean,
    Fri: boolean,
    Sat: boolean,
    Sun: boolean
  ) {
    const time: Time = {
      hours,
      minutes,
    };
    const payload = [];
    let data = { patientId: Number(patientId), drugId, time, dosage, notify };
    if (Mon) {
      this.sendAllocation({ ...data, date: this.getNextDayOfTheWeek('Mon') })
    }
    if (Tue) {
      this.sendAllocation({ ...data, date: this.getNextDayOfTheWeek('Tue') })
    }
    if (Wed) {
      this.sendAllocation({ ...data, date: this.getNextDayOfTheWeek('Wed') })
    }
    if (Thu) {
      this.sendAllocation({ ...data, date: this.getNextDayOfTheWeek('Thu') })
    }
    if (Fri) {
      this.sendAllocation({ ...data, date: this.getNextDayOfTheWeek('Fri') })
    }
    if (Sat) {
      this.sendAllocation({ ...data, date: this.getNextDayOfTheWeek('Sat') })
    }
    if (Sun) {
      this.sendAllocation({ ...data, date: this.getNextDayOfTheWeek('Sun') })
    }
  
  }
  sendAllocation(payload: {
    patientId: number;
    drugId: number;
    time: Time;
    dosage: string;
    notify: boolean;
    date: Date
  }) {
    this._allocationResourceService.createAction(payload).subscribe();
  }
}
