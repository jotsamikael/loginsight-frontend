import { TestBed } from '@angular/core/testing';

import { TerminalModelService } from './terminal-model.service';

describe('TerminalModelService', () => {
  let service: TerminalModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerminalModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
