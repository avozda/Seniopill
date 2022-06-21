import { Component, OnInit } from '@angular/core';
import { APISchema } from 'src/libs/@api/api-objects/api-objects';
import { DrugResourceService } from 'src/libs/@api/api-resource/drug-resource.service';

@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']
})
export class MedicamentsComponent implements OnInit {

  constructor(private _drugResourceService: DrugResourceService) { }


  ngOnInit(): void {
    this.getDrugs();
  }
  filteredList:APISchema.Drug[] = [];

  drugList:APISchema.Drug[] = [];

  filterDrugList(e: any) {
 
    this.filteredList = this.drugList.filter((value) =>
      value.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
 
}

  getDrugs(){
    this._drugResourceService.listAction().subscribe((value)=>{
      this.drugList = value;
      this.filteredList = value;
    })
  }
}
