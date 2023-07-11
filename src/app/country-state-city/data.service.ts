
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, mergeMap, of } from 'rxjs';


export interface BaseEntity {
  id: number;
  name: string;
}

export interface Country extends BaseEntity {}
export interface State extends BaseEntity {}

export interface CountryState {
  id: number;
  idCountry: number;
  states: State[]
}

export interface StateCity {
  id: number;
  idCountry: number;
  idRootState: number;
  states: City[];
}

export interface City {
  idState: number;
  cities:string[]
}

export interface CountryAndState {
  state: State;
  country: Country;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private http = inject(HttpClient);

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('api/countries').pipe(
      map((countries: Country[]) => countries),
      catchError((error) => {
        console.log('Error occurred while fetching countries', error);
        return of([]);
      })
    );
  }

  getStatesByCountry(idCountry: number): Observable<State[]> {
    return this.http.get<CountryState>(`api/states/${idCountry}`).pipe(
      map((res: CountryState) => res.states),
      catchError((error) => {
        console.log('Error occurred while fetching states', error);
        return of([]);
      })
    );
  }

  getCitiesByState(params: CountryAndState): Observable<string[]> {
    return this.http.get<StateCity>(`api/cities/${params.country.id}`).pipe(
      mergeMap((res: StateCity) =>
        this.findMatchingCities(res, params.state.id)
      ),
      catchError((error) => {
        console.log('Error occurred while fetching cities and states', error);
        return of([]);
      })
    );
  }

  private findMatchingCities(res: StateCity, idState: number): Observable<string[]> {
    const matchingCity = res.states.find((city) => city.idState === idState);

    if (!matchingCity) {
      return of([])
    }

    return of(matchingCity.cities);
  }
}
