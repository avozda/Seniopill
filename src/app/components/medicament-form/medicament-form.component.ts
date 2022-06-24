import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { APISchema } from 'src/libs/@api/api-objects/api-objects';
@Component({
  selector: 'app-medicament-form',
  templateUrl: './medicament-form.component.html',
  styleUrls: ['./medicament-form.component.scss'],
})
export class MedicamentFormComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) {}

  @Output() onFormSubmit: EventEmitter<{
    title: string;
    description: string;
    dosage: string;
  }> = new EventEmitter();

  @Input() Data?: APISchema.Drug;

  formGroup = this._formBuilder.group({
    title: new FormControl('', [Validators.required]),
    description: '',
    dosage: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    if (this.Data) {
      this.formGroup.setValue({
        title: this.Data.title,
        description: this.Data.description,
        dosage: this.Data.dosage,
      });
    }
  }

  submitForm(title: string, description: string, dosage: string) {
    if(!this.formGroup.valid){return}
    const payload = { title, description, dosage };
    this.onFormSubmit.emit(payload);
  }
}
