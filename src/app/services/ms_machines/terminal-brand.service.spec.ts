import { TestBed } from '@angular/core/testing';

import { TerminalBrandService } from './terminal-brand.service';

describe('TerminalBrandService', () => {
  let service: TerminalBrandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerminalBrandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
