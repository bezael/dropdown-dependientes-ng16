import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CountryStateCityComponent } from './country-state-city/country-state-city.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DbData } from 'src/assets/db.data';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DbData),
    CountryStateCityComponent,
    BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
