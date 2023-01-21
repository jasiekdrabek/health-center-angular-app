import { TestBed } from '@angular/core/testing';

import { MedicalReferralService } from './medical-referral.service';

describe('MedicalReferralService', () => {
  let service: MedicalReferralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalReferralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
