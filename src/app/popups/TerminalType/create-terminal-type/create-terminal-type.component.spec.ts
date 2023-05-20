import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTerminalTypeComponent } from './create-terminal-type.component';

describe('CreateTerminalTypeComponent', () => {
  let component: CreateTerminalTypeComponent;
  let fixture: ComponentFixture<CreateTerminalTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTerminalTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTerminalTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
