import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private apiUrl = environment.api; 
  
  constructor(private http: HttpClient) { }

  getAllHealthZones() {
    return this.http.get(`${this.apiUrl}/health-zones`);
  }

  getHealthZone(id) {
    return this.http.get(`${this.apiUrl}/health-zones/${id}`);
  }

  getAllDeaths() {
    return this.http.get(`${this.apiUrl}/deaths`);
  }

  getDeath(id) {
    return this.http.get(`${this.apiUrl}/deaths/${id}`);
  }

}
