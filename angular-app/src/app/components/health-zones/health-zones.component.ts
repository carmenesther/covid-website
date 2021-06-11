import { DbService } from './../../services/db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-zones',
  templateUrl: './health-zones.component.html',
  styleUrls: ['./health-zones.component.scss']
})
export class HealthZonesComponent implements OnInit {

  healthZones: any = [];
  panelOpenState = false;

  constructor(private db: DbService) { }

  ngOnInit(): void {
    this.getAllHealthZones();
  }

  getAllHealthZones() {
    this.db.getAllHealthZones().subscribe((data) => {
      this.healthZones = data;
      console.log(this.healthZones);
    });
  }



}
