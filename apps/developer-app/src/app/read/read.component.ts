import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { GetAllMatricsDataService, MatricsData } from '../matrics-data.service';

@Component({
  selector: 'tss-job-interview-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit, OnDestroy {
  public usersCarChoiceList$: Observable<MatricsData[]>;
  public subscription$: Subscription;
  constructor(private getAllMatricsDataService: GetAllMatricsDataService) {}

  ngOnInit(): void {
    this.usersCarChoiceList$ = this.getAllMatricsDataService
      .watch()
      .valueChanges.pipe(map((result) => result.data.matricData));
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
