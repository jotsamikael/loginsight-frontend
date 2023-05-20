import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTerminalTypeComponent } from './update-terminal-type.component';

describe('UpdateTerminalTypeComponent', () => {
  let component: UpdateTerminalTypeComponent;
  let fixture: ComponentFixture<UpdateTerminalTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTerminalTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTerminalTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
