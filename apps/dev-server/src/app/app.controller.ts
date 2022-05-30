import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { CarDataDTO } from './data.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post('/')
  postData(@Body() carchoice: CarDataDTO) {
    console.log(carchoice, '---');
    this.appService.postData(carchoice);
  }
}
