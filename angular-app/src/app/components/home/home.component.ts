import { DbService } from 'src/app/services/db.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DeathModel } from 'src/app/models/death.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataSource = new MatTableDataSource<DeathModel>();
  deaths: any = [];

  displayedColumns: string[] = ['sexo', 'edad', 'mes', 'total'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private db: DbService) { }

  ngOnInit(): void {
    this.getAllDeaths();
  }

  getAllDeaths() {
    this.db.getAllDeaths().subscribe(data => {
      this.deaths = data;
      this.dataSource = new MatTableDataSource<DeathModel>(this.deaths);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
/*
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }*/
}

