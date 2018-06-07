import { TestBed, inject } from '@angular/core/testing';

import { ComptesService } from './comptes.service';

describe('ComptesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComptesService]
    });
  });

  it('should be created', inject([ComptesService], (service: ComptesService) => {
    expect(service).toBeTruthy();
  }));
});
