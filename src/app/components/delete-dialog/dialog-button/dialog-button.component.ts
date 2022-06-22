import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-dialog-button',
  templateUrl: './dialog-button.component.html',
  styleUrls: ['./dialog-button.component.scss']
})
export class DialogButtonComponent {

  constructor(public dialog: MatDialog) { }

  @Output() onDelete: EventEmitter<null> = new EventEmitter()


  openDialog(): void {
   const dialogRef= this.dialog.open(DialogComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result==="delete"){
        this.onDelete.emit();
      }
    });
  }
}
