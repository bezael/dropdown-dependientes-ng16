import { InMemoryDbService } from 'angular-in-memory-web-api';

export class DbData implements InMemoryDbService {
  createDb() {
    const countries = [
      {
        id: 1,
        name: 'Estados Unidos',
      },
      {
        id: 2,
        name: 'México',
      },
      {
        id: 3,
        name: 'España',
      },

      {
        id: 4,
        name: 'Francia',
      },
      {
        id: 5,
        name: 'Argentina',
      },
      {
        id: 6,
        name: 'Australia',
      },

      {
        id: 7,
        name: 'Japón',
      },
      {
        id: 8,
        name: 'India',
      },
      {
        id: 9,
        name: 'China',
      },
    ];

    const states = [
      {
        id: 1,
        idCountry: 1,
        states: [
          {
            id: 1,
            name: 'California',
          },
          {
            id: 2,
            name: 'Nueva York',
          },
        ],
      },
      {
        id: 2,
        idCountry: 2,
        states: [
          {
            id: 3,
            name: 'Jalisco',
          },
          {
            id: 4,
            name: 'Ciudad de México',
          },
        ],
      },
      {
        id: 3,
        idCountry: 3,
        states: [
          {
            id: 5,
            name: 'Cataluña',
          },
          {
            id: 6,
            name: 'Madrid',
          },
        ],
      },

      {
        id: 4,
        idCountry: 4,
        states: [
          {
            id: 7,
            name: 'Île-de-France',
          },
          {
            id: 8,
            name: 'Auvernia-Ródano-Alpes',
          },
        ],
      },
      {
        id: 5,
        idCountry: 5,
        states: [
          {
            id: 9,
            name: 'Buenos Aires',
          },
          {
            id: 10,
            name: 'Córdoba',
          },
        ],
      },
      {
        id: 6,
        idCountry: 6,
        states: [
          {
            id: 11,
            name: 'Nueva Gales del Sur',
          },
          {
            id: 12,
            name: 'Victoria',
          },
        ],
      },

      {
        id: 7,
        idCountry: 7,
        states: [
          {
            id: 13,
            name: 'Tokio',
          },
          {
            id: 14,
            name: 'Osaka',
          },
        ],
      },
      {
        id: 8,
        idCountry: 8,
        states: [
          {
            id: 15,
            name: 'Maharashtra',
          },
          {
            id: 16,
            name: 'Delhi',
          },
        ],
      },
      {
        id: 9,
        idCountry: 9,
        states: [
          {
            id: 17,
            name: 'Guangdong',
          },
          {
            id: 18,
            name: 'Shanghai',
          },
        ],
      },
    ];

    const cities = [
      {
        id: 1,
        idCountry: 1,
        idRootState: 1,
        states: [
          {
            idState: 1,
            cities: ['Los Angeles', 'San Francisco', 'Sacramento'],
          },
          {
            idState: 2,
            cities: ['Nueva York', 'Buffalo', 'Rochester'],
          },
        ],
      },
      {
        id: 2,
        idCountry: 2,
        idRootState: 2,
        states: [
          {
            idState: 3,
            cities: ['Guadalajara', 'Puerto Vallarta', 'Zapopan'],
          },
          {
            idState: 4,
            cities: ['Coyoacán', 'Tlalpan', 'Xochimilco'],
          },
        ],
      },
      {
        id: 3,
        idCountry: 3,
        idRootState: 3,
        states: [
          {
            idState: 5,
            cities: ['Barcelona', 'Girona', 'Tarragona'],
          },
          {
            idState: 6,
            cities: ['Madrid', 'Alcalá de Henares', 'Getafe'],
          },
        ],
      },

      {
        id: 4,
        idCountry: 4,
        idRootState: 4,
        states: [
          {
            idState: 7,
            cities: ['París', 'Versalles', 'Boulogne-Billancourt'],
          },
          {
            idState: 8,
            cities: ['Lyon', 'Grenoble', 'Saint-Étienne'],
          },
        ],
      },
      {
        id: 5,
        idCountry: 5,
        idRootState: 5,
        states: [
          {
            idState: 9,
            cities: ['Buenos Aires', 'La Plata', 'Mar del Plata'],
          },
          {
            idState: 10,
            cities: ['Córdoba', 'Río Cuarto', 'Villa María'],
          },
        ],
      },
      {
        id: 6,
        idCountry: 6,
        idRootState: 6,
        states: [
          {
            idState: 11,
            cities: ['Sídney', 'Newcastle', 'Wollongong'],
          },
          {
            idState: 12,
            cities: ['Melbourne', 'Geelong', 'Ballarat'],
          },
        ],
      },

      {
        id: 7,
        idCountry: 7,
        idRootState: 7,
        states: [
          {
            idState: 13,
            cities: ['Shibuya', 'Shinjuku', 'Chiyoda'],
          },
          {
            idState: 14,
            ciudades: ['Osaka', 'Sakai', 'Higashiōsaka'],
          },
        ],
      },
      {
        id: 8,
        idCountry: 8,
        idRootState: 8,
        states: [
          {
            idState: 15,
            cities: ['Mumbai', 'Pune', 'Nagpur'],
          },
          {
            idState: 16,
            cities: ['Delhi', 'New Delhi', 'North Delhi'],
          },
        ],
      },
      {
        id: 9,
        idCountry: 9,
        idRootState: 9,
        states: [
          {
            idState: 17,
            cities: ['Guangzhou', 'Shenzhen', 'Dongguan'],
          },
          {
            idState: 18,
            cities: ['Pudong', 'Huangpu', 'Xuhui'],
          },
        ],
      },
    ];

    return { countries, states, cities };
  }
}
