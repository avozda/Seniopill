import { Time } from "@angular/common";

export namespace APISchema {
  export interface Patient {
    id: number;
    name: string;
    dateOfBirth: Date;
    room: number;
    bed: number;
  }
  export interface Drug {
    id: number;
    title: string;
    dosage: string;
    description: string;
  }
  export interface Allocation {
    id: number;
    patientId: number;
    drugId: number;
    time: Time;
    date: Date;
    dosage: string;
    notify: boolean;
  }
}
