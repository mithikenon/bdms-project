import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewRegComponent } from './create-new-reg.component';

describe('CreateNewRegComponent', () => {
  let component: CreateNewRegComponent;
  let fixture: ComponentFixture<CreateNewRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
