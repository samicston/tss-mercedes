import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CarDataDTO } from '../car-data.dto';
import { MatricsDataService } from '../matrics-data.service';

@Component({
  selector: 'tss-job-interview-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit, OnDestroy {
  public usersCarChoiceList: CarDataDTO[] = [];
  public subscription$: Subscription;
  constructor(private matricsDataService: MatricsDataService) {}

  ngOnInit(): void {
    this.getUsersCarChoiceList();
  }

  getUsersCarChoiceList(search?: string): void {
    this.subscription$ = this.matricsDataService
      .getListOfUsersCarChoice(search)
      .subscribe((carChoiceList) => {
        this.usersCarChoiceList = carChoiceList;
      });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
