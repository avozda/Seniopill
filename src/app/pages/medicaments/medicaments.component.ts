import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DrugResourceService } from 'src/libs/@api/api-resource/drug-resource.service';

@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.scss']
})
export class MedicamentsComponent implements OnInit, AfterViewInit {

  constructor(private _drugResourceService: DrugResourceService,
              private _liveAnnouncer: LiveAnnouncer) { }


  ngOnInit(): void {
    this.getDrugs();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  displayedColumns: string[] = [ 'id','title', 'dosage'];
  dataSource = new MatTableDataSource();
  
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;


  getDrugs(){
    this._drugResourceService.listAction().subscribe((value)=>{
      this.dataSource.data = value;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
