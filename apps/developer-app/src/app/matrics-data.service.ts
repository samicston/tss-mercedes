import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDataDTO } from './car-data.dto';

@Injectable({
  providedIn: 'root',
})
export class MatricsDataService {
  constructor(private http: HttpClient) {}

  createUserCarChoice(carData: CarDataDTO): Observable<number> {
    console.log(carData, '+++d');
    return this.http.post<number>(
      '/api/center-matrix/',
      carData
    );
  }

  getListOfUsersCarChoice(
    search: string | undefined
  ): Observable<CarDataDTO[]> {
    return search
      ? this.http.get<CarDataDTO[]>(
          `http://localhost:3400/api/center-matrix?${search}`
        )
      : this.http.get<CarDataDTO[]>(`http://localhost:3400/api/center-matrix`);
  }
}
