import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { DbService } from 'src/app/services/db.service';
import { faFemale, faMale, faVenusMars, faBirthdayCake, faSkull, faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.component.html',
  styleUrls: ['./deaths.component.scss']
})
export class DeathsComponent implements OnInit {

  deaths: any= [];
  pagedList: any= [];
  length;
  wait: boolean = true;

  /** ICONS USADOS */
  faFemale = faFemale;
  faMale = faMale;
  faBothGenders = faVenusMars;
  faBirthday = faBirthdayCake;
  faDeath = faSkull;
  faCalendar = faCalendar;

  constructor(private db: DbService) { }

  ngOnInit(): void {
    this.getAllDeaths();
  }

  getAllDeaths() {
    this.db.getAllDeaths().subscribe(data => {
      this.deaths = data;
      this.pagedList = this.deaths.slice(0, 3);
      this.length = this.deaths.length;
      this.wait = false;
    });
  }

  onPageChange(event: PageEvent){
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;

    if(endIndex > this.deaths.length){
      endIndex = this.deaths.length;
    }

    this.pagedList = this.deaths.slice(startIndex, endIndex);
  }

}
