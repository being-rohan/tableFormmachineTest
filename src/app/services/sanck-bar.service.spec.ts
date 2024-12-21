import { TestBed } from '@angular/core/testing';

import { SanckBarService } from './sanck-bar.service';

describe('SanckBarService', () => {
  let service: SanckBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanckBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
