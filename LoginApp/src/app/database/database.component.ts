import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TestService } from './test.service';
import { Router } from '@angular/router';

export interface PeriodicElement {
  id: string;
  name: string;
  dob: string;
  phone: string;
  comments : [];
}

var ELEMENT_DATA: PeriodicElement[] = []

@Component({
    selector: 'app-database',
    templateUrl: 'database.component.html',
    styleUrl: './database.component.scss',
    standalone: true,
    imports: [MatTableModule],
    providers: [TestService]
})
export class DatabaseComponent  {
  
  constructor(
    public x: TestService,
    private router : Router
  ) {
    
    this.x.getInfo().subscribe((res: any) => {
    ELEMENT_DATA = res;

    })
  }
  goToComment(){
    this.router.navigate(['commentsCard']);
  }
  // @Input() theData: RowsComponent | null = null;
  // @ViewChild(RowsComponent) theRows!: RowsComponent;
  displayedColumns: string[] = ['id', 'name', 'dob', 'phone','comments'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

}