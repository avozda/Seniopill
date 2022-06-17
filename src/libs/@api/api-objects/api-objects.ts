export namespace APISchema {
   export interface Patient {
       id: number;
       name: string;
       dateOfBirth: Date;
       room: number;
       bed:number;
   }
   export interface Drug {
        id:number;
        title: string;
        dosage: string
        description:string;
   }
   export interface allocation {
        patientId: number;
        drugId: number;
        id:number;
        dosage: string;
        notify: boolean;
        Mon:boolean;
        Tue: boolean;
        Wed: boolean;
        Thu: boolean;
        Fri: boolean;
        Sat: boolean;
        Sun: boolean;
   }
}
