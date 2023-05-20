import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPointOfPresenceComponent } from './details-point-of-presence.component';

describe('DetailsPointOfPresenceComponent', () => {
  let component: DetailsPointOfPresenceComponent;
  let fixture: ComponentFixture<DetailsPointOfPresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPointOfPresenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPointOfPresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
