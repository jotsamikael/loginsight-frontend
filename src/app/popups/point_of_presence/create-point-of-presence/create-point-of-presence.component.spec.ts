import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePointOfPresenceComponent } from './create-point-of-presence.component';

describe('CreatePointOfPresenceComponent', () => {
  let component: CreatePointOfPresenceComponent;
  let fixture: ComponentFixture<CreatePointOfPresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePointOfPresenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePointOfPresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
