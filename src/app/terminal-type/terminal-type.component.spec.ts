import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalTypeComponent } from './terminal-type.component';

describe('TerminalTypeComponent', () => {
  let component: TerminalTypeComponent;
  let fixture: ComponentFixture<TerminalTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
