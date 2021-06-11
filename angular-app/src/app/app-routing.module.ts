import { DeathsComponent } from './components/deaths/deaths.component';
import { HealthZonesComponent } from './components/health-zones/health-zones.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { VaccinationComponent } from './components/vaccination/vaccination.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'deaths',
    component: DeathsComponent
  },
  {
    path: 'health-zones',
    component: HealthZonesComponent
  },
  {
    path: 'vaccination',
    component: VaccinationComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
