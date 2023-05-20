import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTerminalModelComponent } from './create-terminal-model.component';

describe('CreateTerminalModelComponent', () => {
  let component: CreateTerminalModelComponent;
  let fixture: ComponentFixture<CreateTerminalModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTerminalModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTerminalModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
