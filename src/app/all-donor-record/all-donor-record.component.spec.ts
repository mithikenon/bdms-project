import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDonorRecordComponent } from './all-donor-record.component';

describe('AllDonorRecordComponent', () => {
  let component: AllDonorRecordComponent;
  let fixture: ComponentFixture<AllDonorRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDonorRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDonorRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
