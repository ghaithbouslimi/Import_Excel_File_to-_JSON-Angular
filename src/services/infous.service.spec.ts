import { TestBed } from '@angular/core/testing';

import { InfousService } from './infous.service';

describe('InfousService', () => {
  let service: InfousService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfousService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
