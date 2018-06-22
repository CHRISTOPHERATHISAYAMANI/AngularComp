import { TestBed, inject } from '@angular/core/testing';

import { CompAddService } from './comp-add.service';

describe('CompAddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompAddService]
    });
  });

  it('should be created', inject([CompAddService], (service: CompAddService) => {
    expect(service).toBeTruthy();
  }));
});
