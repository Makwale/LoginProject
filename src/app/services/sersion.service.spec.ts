import { TestBed } from '@angular/core/testing';

import { SersionService } from './sersion.service';

describe('SersionService', () => {
  let service: SersionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SersionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
