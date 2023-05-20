import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTerminalModelComponent } from './update-terminal-model.component';

describe('UpdateTerminalModelComponent', () => {
  let component: UpdateTerminalModelComponent;
  let fixture: ComponentFixture<UpdateTerminalModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTerminalModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTerminalModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
