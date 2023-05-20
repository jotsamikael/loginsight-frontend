import { TestBed } from '@angular/core/testing';

import { PointOfPresenceService } from './point-of-presence.service';

describe('PointOfPresenceService', () => {
  let service: PointOfPresenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PointOfPresenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
