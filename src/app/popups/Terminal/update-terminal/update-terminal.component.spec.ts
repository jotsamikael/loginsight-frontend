import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTerminalComponent } from './update-terminal.component';

describe('UpdateTerminalComponent', () => {
  let component: UpdateTerminalComponent;
  let fixture: ComponentFixture<UpdateTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTerminalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
