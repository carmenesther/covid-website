import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { VaccinationModel } from 'src/app/models/vaccination.model';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private apiUrl = environment.api; 
  
  constructor(private http: HttpClient) { }

  getAllDeaths() {
    return this.http.get(`${this.apiUrl}/api/deaths`);
  }

  getDeath(id) {
    return this.http.get(`${this.apiUrl}/api/deaths/${id}`);
  }

  getDeathsByGenre(genre: string) {
    return this.http.get(`${this.apiUrl}/api/deaths-genre/${genre}`);
  }

  getCountGenre() {
    return this.http.get(`${this.apiUrl}/api/deaths-count-genre`);
  }

  getAllHealthZones() {
    return this.http.get(`${this.apiUrl}/api/health-zones`);
  }

  getHealthZone(id) {
    return this.http.get(`${this.apiUrl}/api/health-zones/${id}`);
  }

  getAllVaccination() {
    return this.http.get(`${this.apiUrl}/api/vaccination`);
  }

  addVaccination(vaccination: VaccinationModel) {
    return this.http.post(`${this.apiUrl}/api/vaccination/`, vaccination);
  }

}
