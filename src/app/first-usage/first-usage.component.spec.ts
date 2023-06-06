import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstUsageComponent } from './first-usage.component';

describe('FirstUsageComponent', () => {
  let component: FirstUsageComponent;
  let fixture: ComponentFixture<FirstUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstUsageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
