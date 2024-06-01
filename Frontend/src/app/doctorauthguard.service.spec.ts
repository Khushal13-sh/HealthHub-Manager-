import { TestBed } from '@angular/core/testing';

import { DoctorauthguardService } from './doctorauthguard.service';

describe('DoctorauthguardService', () => {
  let service: DoctorauthguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorauthguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
