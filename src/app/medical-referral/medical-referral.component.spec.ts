import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalReferralComponent } from './medical-referral.component';

describe('MedicalReferralComponent', () => {
  let component: MedicalReferralComponent;
  let fixture: ComponentFixture<MedicalReferralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalReferralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
