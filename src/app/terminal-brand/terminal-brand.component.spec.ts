import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalBrandComponent } from './terminal-brand.component';

describe('TerminalBrandComponent', () => {
  let component: TerminalBrandComponent;
  let fixture: ComponentFixture<TerminalBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
