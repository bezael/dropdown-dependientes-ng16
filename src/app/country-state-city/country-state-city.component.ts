import { toSignal } from '@angular/core/rxjs-interop';
import { Component, inject } from '@angular/core';
import { Country, CountryAndState, DataService, State, StateCity } from './data.service';
import { NgFor } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { filter, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-country-state-city',
  templateUrl: './country-state-city.component.html',
  styleUrls: ['./country-state-city.component.css'],
  standalone: true,
  imports: [
    NgFor,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
})
export class CountryStateCityComponent {
  countryControl = new FormControl<Country | null>(null);
  stateControl = new FormControl<State | null>(null);
  cityControl = new FormControl<StateCity | null>(null);

  private dataSvc = inject(DataService);

  countries$ = toSignal(this.dataSvc.getCountries());

  states$ = toSignal(this.countryControl.valueChanges
    .pipe(
      filter((value): value is Country => value !== null),
      switchMap((country: Country) => {
        this.stateControl.reset();
        if (!country) {
          return of([]);
        } else {
          return this.dataSvc.getStatesByCountry(country.id)
            .pipe(
              tap((states) => {
                if (states.length === 0) {
                  alert('No data found!')
                }
              })
            )
        }

      }))
  )


  cities$ = toSignal(this.stateControl.valueChanges
    .pipe(
      filter((value): value is State => value !== null),
      switchMap((state:State) => {
        this.cityControl.reset();
        if (!state) {
          return of([]);
        } else {
          const params: CountryAndState = {
            state,
            country: this.countryControl.value as Country,
          };
          return this.dataSvc.getCitiesByState(params).pipe(
            tap((cities) => {
              if (cities.length === 0) {
                alert('No data found!');
              }
            })
          );
        }

      }))
    )
}
