import { TestBed } from '@angular/core/testing';

import { MainNavService } from './main-nav.service';

describe('MainNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainNavService = TestBed.get(MainNavService);
    expect(service).toBeTruthy();
  });
});
