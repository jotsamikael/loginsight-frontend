import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H22ReportComponent } from './h22-report.component';

describe('H22ReportComponent', () => {
  let component: H22ReportComponent;
  let fixture: ComponentFixture<H22ReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H22ReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(H22ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
