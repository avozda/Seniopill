import { Time } from "@angular/common";

export namespace APISchema {
  export interface Patient {
    id: number;
    name: string;
    dateOfBirth: Date;
    room: number;
    bed: number;
    sex: string;
    description: string;
  }
  export interface Drug {
    id: number;
    title: string;
    dosage: string;
    description: string;
  }
  export interface Allocation {
    id: number;
    drugTitle: string;
    patientId: number;
    patientName: string;
    drugId: number;
    date: Date;
    dosage: string;
    notify: boolean;
  }
}
