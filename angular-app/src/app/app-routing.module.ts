import { DeathsComponent } from './components/deaths/deaths.component';
import { HealthZonesComponent } from './components/health-zones/health-zones.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'health-zones',
    component: HealthZonesComponent
  },
  {
    path: 'deaths',
    component: DeathsComponent
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
