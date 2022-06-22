import { Injectable } from '@angular/core';
import { APISchema } from 'src/libs/@api/api-objects/api-objects';
@Injectable({
  providedIn: 'root',
})
export class LastSeenPatientsService {
  constructor() {}

  addNew(patient: APISchema.Patient) {
    let patients: APISchema.Patient[] = JSON.parse(
      localStorage.getItem('lastSeen') || '[]'
    );

    patients = patients.filter((value) => value.id !== patient.id);
    patients.unshift(patient);  

    localStorage.setItem('lastSeen', JSON.stringify(patients.slice(0,4)));
  }

  getLastSeenPatients(): APISchema.Patient[] {
    const patients: APISchema.Patient[] = JSON.parse(
      localStorage.getItem('lastSeen') || '[]'
    );
    return patients;
  }
}
