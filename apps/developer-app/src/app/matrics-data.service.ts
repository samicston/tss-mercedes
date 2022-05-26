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
    return this.http.post<number>('/', carData);
  }

  getListOfUsersCarChoice(search: string | undefined): Observable<CarDataDTO[]> {
    return search ? this.http.get<CarDataDTO[]>(`/search?${search}`) : this.http.get<CarDataDTO[]>(`/search`);
  }
}
