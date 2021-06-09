import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.component.html',
  styleUrls: ['./deaths.component.scss']
})
export class DeathsComponent implements OnInit {

  deaths: any = [];

  constructor(private db: DbService) { }

  ngOnInit(): void {
    this.getAllDeaths();
  }

  getAllDeaths() {
    this.db.getAllDeaths().subscribe(data => {
      this.deaths = data;
      console.log(this.deaths);
    });
  }

}
