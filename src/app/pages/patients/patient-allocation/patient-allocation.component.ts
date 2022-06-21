import { Component, OnInit } from '@angular/core';
import { APISchema } from 'src/libs/@api/api-objects/api-objects';
import { DrugResourceService } from 'src/libs/@api/api-resource/drug-resource.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { PatientResourceService } from 'src/libs/@api/api-resource/patient-resource.service';
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
    private _patientResourceService: PatientResourceService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) {}

  formGroup = this._formBuilder.group({
    dosage: '',
    time: '',
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
  patient: APISchema.Patient | {name:string} = {name:""};

  ngOnInit(): void {
    if (!Number(this._route.snapshot.paramMap.get('id'))) {
      this._router.navigate(['/patients']);
    }

    this.getAllDrugs();
    this.getPatient();
  }


  getAllDrugs() {
    this._drugResourceService.listAction().subscribe((value) => {
      this.drugs = value;
    });
  }
  getPatient(){
    
   this._patientResourceService.detailAction(this.id).subscribe((value)=> this.patient=value)
  }

  onDrugChange() {
    this.formGroup.setValue({
      ...this.formGroup.value,
      dosage: this.selectedDrug.dosage,
    });
  }
  getNextDayOfTheWeek(
    dayName: string,
    time: string,
    excludeToday = false,
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
   
    refDate.setHours(Number(time.split(":")[0]))
    refDate.setMinutes(Number(time.split(":")[1]))
    return refDate;
  }

  createAllocation(
    patientId: string,
    drugId: number,
    drugTitle: string,
    patientName:string,
    time:string,
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

    let data = {
      patientId: Number(patientId),
      drugId,
      drugTitle,
      patientName,
      time,
      dosage,
      notify,
    };
    if (Mon) {
      this.sendAllocation({ ...data, date: this.getNextDayOfTheWeek('Mon', time) });
    }
    if (Tue) {
      this.sendAllocation({ ...data, date: this.getNextDayOfTheWeek('Tue', time) });
    }
    if (Wed) {
      this.sendAllocation({ ...data, date: this.getNextDayOfTheWeek('Wed', time) });
    }
    if (Thu) {
      this.sendAllocation({ ...data, date: this.getNextDayOfTheWeek('Thu', time) });
    }
    if (Fri) {
      this.sendAllocation({ ...data, date: this.getNextDayOfTheWeek('Fri', time) });
    }
    if (Sat) {
      this.sendAllocation({ ...data, date: this.getNextDayOfTheWeek('Sat',time) });
    }
    if (Sun) {
      this.sendAllocation({ ...data, date: this.getNextDayOfTheWeek('Sun', time) });
    }

    this._router.navigate(['/patients', this.id]);
  }
  sendAllocation(payload: {
    patientId: number;
    drugId: number;
    drugTitle: string;
    patientName:string;
    dosage: string;
    notify: boolean;
    date: Date;
  }) {
    console.log(payload.date)
    this._allocationResourceService.createAction(payload).subscribe();
  }
}
