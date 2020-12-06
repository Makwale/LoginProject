import { TestBed } from '@angular/core/testing';

import { SerssionGuard } from './serssion.guard';

describe('SerssionGuard', () => {
  let guard: SerssionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SerssionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
