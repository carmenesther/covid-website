import { MaterialModule } from './shared/modules/material/material.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

import { FontAwesomeModule, FaIconComponent } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';

import localeES from '@angular/common/locales/es';

registerLocaleData(localeES, 'es');

import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { HealthZonesComponent } from './components/health-zones/health-zones.component';
import { DeathsComponent } from './components/deaths/deaths.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VaccinationComponent } from './components/vaccination/vaccination.component';
import { DeathsBySexComponent } from './components/deaths/deaths-by-sex/deaths-by-sex.component';
import { DeathsByIdComponent } from './components/deaths/deaths-by-id/deaths-by-id.component';
import { ReplaceNullWithTextPipe } from './shared/pipes/replace-null-with-text.pipe';
import { EditHealthZoneComponent } from './components/health-zones/edit-health-zone/edit-health-zone.component';
import { DeleteDialogComponent } from './shared/components/delete-dialog/delete-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    HealthZonesComponent,
    DeathsComponent,
    VaccinationComponent,
    DeathsBySexComponent,
    DeathsByIdComponent,
    ReplaceNullWithTextPipe,
    EditHealthZoneComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ChartsModule
    ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
  entryComponents: [ FaIconComponent ],
})
export class AppModule { }
