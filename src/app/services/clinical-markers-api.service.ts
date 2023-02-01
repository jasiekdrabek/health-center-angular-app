import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { handleError } from '../helpers/handleError';

@Injectable()
export class ClinicalMarkersApiService {  

  constructor(private http: HttpClient) {}

  getBmi(height: string, weight: string) {
    return this.http
      .get('https://clinicalmarkers.p.rapidapi.com/bmi', {
        headers: {
          'X-RapidAPI-Key': '47341b3d35msh83489ab37e52c76p17d05fjsnee6cf0c688b2',
          'X-RapidAPI-Host': 'clinicalmarkers.p.rapidapi.com',
        },
        params: {
          HeightInCentrimetres:height,
          WeightInKilograms: weight,
        },        
      })
      .pipe(catchError(handleError()));
  }
}
