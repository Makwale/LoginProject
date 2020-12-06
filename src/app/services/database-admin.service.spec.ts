import { TestBed } from '@angular/core/testing';

import { DatabaseAdminService } from './database-admin.service';

describe('DatabaseAdminService', () => {
  let service: DatabaseAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
