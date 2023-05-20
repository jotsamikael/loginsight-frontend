import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePointOfPresenceComponent } from './update-point-of-presence.component';

describe('UpdatePointOfPresenceComponent', () => {
  let component: UpdatePointOfPresenceComponent;
  let fixture: ComponentFixture<UpdatePointOfPresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePointOfPresenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePointOfPresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
