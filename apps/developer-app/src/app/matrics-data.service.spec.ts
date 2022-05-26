import { TestBed } from '@angular/core/testing';

import { MatricsDataService } from './matrics-data.service';

describe('MatricsDataService', () => {
  let service: MatricsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatricsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
