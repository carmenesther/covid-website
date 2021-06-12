import { VaccinationModel } from 'src/app/models/vaccination.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DbService } from 'src/app/services/db.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.component.html',
  styleUrls: ['./vaccination.component.scss']
})
export class VaccinationComponent implements OnInit {

  vaccinations: any = [];
  wait: boolean = true;
  vaccination: any = {};

  form: FormGroup;

  vaccinationDataSource = new MatTableDataSource<VaccinationModel>();
  displayedColumns: string[] = ['region', 'date', 'first_dose', 'second_dose', 'total'];


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private db: DbService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getVaccinations();
    this.createForm();
  }
  createForm() {
    this.form = this.fb.group({
      region: ['', Validators.required],
      date: ['', Validators.required],
      first_dose: ['', Validators.required],
      second_dose: ['', Validators.required],
      total: ['', Validators.required]
    });
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

  submit(){
    if (this.form.invalid) { return; }
    this.db.addVaccination(this.vaccination).subscribe(data => console.log(data));
  }
}
