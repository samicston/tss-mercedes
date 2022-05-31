import { Component, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatricsDataSubmissionService } from '../matrics-data.service';
import { dateLessThan } from './create.util';

@Component({
  selector: 'tss-job-interview-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnDestroy {
  public userCarChoice = this.buildForm();
  public color = 'gray';
  public priceList: string[] = [
    '$50000',
    '$30000',
    '$45000',
    '$60000',
    '$35000',
    '$90000',
  ];
  public subscription$: Subscription;

  constructor(
    private fb: FormBuilder,
    private matricsDataSubmissionService: MatricsDataSubmissionService
  ) {}

  public buildForm(): FormGroup {
    return this.fb.group({
      name: new FormControl('', [Validators.required]),
      model: new FormControl('', [
        Validators.required,
        Validators.maxLength(4),
      ]),
      price: new FormControl([], [Validators.required]),
      roadAgeFrom: new FormControl('', [Validators.required, dateLessThan]),
      roadAgeTo: new FormControl('', [Validators.required, dateLessThan]),
      withInsurance: new FormControl(''),
    });
  }

  public submitUserChoice(): void {
    this.subscription$ = this.matricsDataSubmissionService
      .mutate(this.userCarChoice.value)
      .subscribe();
  }

  public get name() {
    return this.userCarChoice.get('name');
  }
  public get model() {
    return this.userCarChoice.get('model');
  }

  public get price() {
    return this.userCarChoice.get('price');
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
