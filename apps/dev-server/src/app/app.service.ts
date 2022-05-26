import { Inject, Injectable, Optional } from '@nestjs/common';
import { CarDataDTO } from './data.dto';

@Injectable()
export class AppService<T> {
  constructor(@Optional() @Inject('HTTP_OPTIONS') private httpClient: T) {}
  getData(): { data: CarDataDTO[] } {
    return this.httpClient.get('http://localhost:3400/api/center-matrix');
  }

  postData(data: CarDataDTO) {}
}
