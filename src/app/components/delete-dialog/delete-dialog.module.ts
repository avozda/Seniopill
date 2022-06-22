import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogButtonComponent } from './dialog-button/dialog-button.component';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [DialogButtonComponent, DialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [DialogButtonComponent, DialogComponent]
})
export class DeleteDialogModule { }
