import { TestBed } from '@angular/core/testing';

import { TerminalTypeService } from './terminal-type.service';

describe('TerminalTypeService', () => {
  let service: TerminalTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerminalTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
