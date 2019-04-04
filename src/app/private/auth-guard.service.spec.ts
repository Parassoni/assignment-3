import { TestBed } from '@angular/core/testing';

import { DetailguardService } from './auth-guard.service';

describe('DetailguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailguardService = TestBed.get(DetailguardService);
    expect(service).toBeTruthy();
  });
});
