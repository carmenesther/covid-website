import { VaccinationModel } from 'src/app/models/vaccination.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DbService } from 'src/app/services/db.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.component.html',
  styleUrls: ['./vaccination.component.scss']
})
export class VaccinationComponent implements OnInit {

  vaccinations: any = [];
  wait: boolean = true;

  vaccinationDataSource = new MatTableDataSource<VaccinationModel>();
  displayedColumns: string[] = ['region', 'date', 'first_dose', 'second_dose', 'total'];


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private db: DbService) { }

  ngOnInit(): void {
    this.getVaccinations();
  }

  getVaccinations() {
    this.db.getAllVaccination().subscribe(
      data => { 
        this.vaccinations = data;
        this.vaccinationDataSource = new MatTableDataSource<VaccinationModel>(this.vaccinations);
        this.vaccinationDataSource.sort = this.sort;
        this.vaccinationDataSource.paginator = this.paginator;
        this.wait = false;
      });
  }

}
