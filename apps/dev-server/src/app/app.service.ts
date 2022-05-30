import { Injectable } from '@nestjs/common';
import { CarDataDTO } from './data.dto';

@Injectable()
export class AppService {
  constructor() {}
  private readonly data: CarDataDTO[] = [];
  getData(): { data: CarDataDTO[] } {
    return { data: this.data };
  }

  postData(data: CarDataDTO) {
    this.data.push(data);
  }
}
