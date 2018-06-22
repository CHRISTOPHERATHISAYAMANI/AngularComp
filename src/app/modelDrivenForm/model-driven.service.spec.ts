import { TestBed, inject } from '@angular/core/testing';

import { ModelDrivenService } from './model-driven.service';

describe('ModelDrivenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModelDrivenService]
    });
  });

  it('should be created', inject([ModelDrivenService], (service: ModelDrivenService) => {
    expect(service).toBeTruthy();
  }));
});
