import { TestBed } from '@angular/core/testing';

import { ClinicalMarkersApiService } from './clinical-markers-api.service';

describe('ClinicalMarkersApiService', () => {
  let service: ClinicalMarkersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinicalMarkersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
