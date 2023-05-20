import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalModelComponent } from './terminal-model.component';

describe('TerminalModelComponent', () => {
  let component: TerminalModelComponent;
  let fixture: ComponentFixture<TerminalModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
