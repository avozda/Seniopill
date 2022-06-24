import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { APISchema } from 'src/libs/@api/api-objects/api-objects';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
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
        sex: this.Data.sex,
        description: this.Data.description
      })
    }
  }

  wrongDate = false;

  @Output() onFormSubmit: EventEmitter<{
    name: string, room: number, bed:number, dateOfBirth:string, sex:string; description:string;
  }> = new EventEmitter()

  @Input() Data?: APISchema.Patient;

  formGroup = this._formBuilder.group({
    name: new FormControl('', [Validators.required]),
    room:  new FormControl('', [Validators.required]),
    bed:  new FormControl('', [Validators.required]),
    dateOfBirth:  new FormControl('', [Validators.required]),
    sex: new FormControl('', [Validators.required]),
    description:''
  });

  submitForm(name: string, room: number, bed:number, dateOfBirth:string, sex:string, description:string){
    if(!this.formGroup.valid){return}

    if(new Date(this.formGroup.value.dateOfBirth) > new Date()){
      this.formGroup.get("dateOfBirth")?.setErrors({'incorrect': true })
      return
    }

    const payload = {name, room, bed, dateOfBirth,sex, description};
    this.onFormSubmit.emit(payload);
  }

}
