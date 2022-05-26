import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatricsDataService } from '../matrics-data.service';
import { dateLessThan } from './create.util';

@Component({
  selector: 'tss-job-interview-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
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

  constructor(
    private fb: FormBuilder,
    private matricsDataService: MatricsDataService
  ) {}

  buildForm(): FormGroup {
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

  submitUserChoice(): void {
    this.matricsDataService.createUserCarChoice(this.userCarChoice.value);
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
}
