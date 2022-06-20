import { Component, OnInit } from '@angular/core';
import { AllocationResourceService } from 'src/libs/@api/api-resource/allocation-resource.service';
import { PatientResourceService } from 'src/libs/@api/api-resource/patient-resource.service';
import { APISchema } from 'src/libs/@api/api-objects/api-objects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(){}

  upcomingAllocations:APISchema.Allocation[] = [];

  ngOnInit(): void {
    
  }
}
