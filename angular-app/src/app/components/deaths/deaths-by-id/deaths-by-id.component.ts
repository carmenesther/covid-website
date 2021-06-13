import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
import { faFemale, faMale, faVenusMars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-deaths-by-id',
  templateUrl: './deaths-by-id.component.html',
  styleUrls: ['./deaths-by-id.component.scss']
})
export class DeathsByIdComponent implements OnInit {

  deathId; 
  death: any = [];

  wait: boolean = true;

  faFemale = faFemale;
  faMale = faMale;
  faBothGenders = faVenusMars;

  constructor(private db: DbService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.deathId = this.route.snapshot.paramMap.get('id');
    this.getDeathById(this.deathId);
  }

  getDeathById(id) {
    this.db.getDeath(id).subscribe(data => {
      this.death = data;
      console.log(this.death);
      this.wait = false;
    })
  }

}
