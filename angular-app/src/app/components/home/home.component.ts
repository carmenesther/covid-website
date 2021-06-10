import { DbService } from 'src/app/services/db.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DeathModel } from 'src/app/models/death.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HealthZoneModel } from 'src/app/models/health-zone.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  deathDataSource = new MatTableDataSource<DeathModel>();
  healthZoneDataSource = new MatTableDataSource<HealthZoneModel>();
  deaths: any = [];
  healthZones: any = [];

  deathsDisplayedColumns: string[] = ['sexo', 'edad', 'mes', 'total'];
  healthZonesDisplayedColumns: string[] = ['zona_basica_salud', 'fecha_informe', 'casos_confirmados_totales', 'tasa_incidencia_acumulada_total'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private db: DbService) { }

  ngOnInit(): void {
    this.getAllDeaths();
    this.getAllHealthZones();
  }

  getAllDeaths() {
    this.db.getAllDeaths().subscribe(data => {
      this.deaths = data;
      this.deathDataSource = new MatTableDataSource<DeathModel>(this.deaths);
      this.deathDataSource.sort = this.sort;
      this.deathDataSource.paginator = this.paginator;
    });
  }

  getAllHealthZones() {
    this.db.getAllHealthZones().subscribe(data => {
      this.healthZones = data;
      this.healthZoneDataSource = new MatTableDataSource<HealthZoneModel>(this.healthZones);
      this.healthZoneDataSource.sort = this.sort;
      this.healthZoneDataSource.paginator = this.paginator;
    });
  }
/*
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }*/
}

