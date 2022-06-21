import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { APISchema } from 'src/libs/@api/api-objects/api-objects';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit(): void {
    if(this.Data){
      this.formGroup.setValue({
        name: this.Data.name,
        room: this.Data.room,
        bed: this.Data.bed,
        dateOfBirth: this.Data.dateOfBirth,
      })
    }
  }

  @Output() onFormSubmit: EventEmitter<{
    name: string, room: number, bed:number, dateOfBirth:string
  }> = new EventEmitter()

  @Input() Data?: APISchema.Patient;

  formGroup = this._formBuilder.group({
    name: '',
    room: null,
    bed: null,
    dateOfBirth: '',
  });

  submitForm(name: string, room: number, bed:number, dateOfBirth:string){
    const payload = {name, room, bed, dateOfBirth};
    this.onFormSubmit.emit(payload);
  }

}
