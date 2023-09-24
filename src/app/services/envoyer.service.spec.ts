import { TestBed } from '@angular/core/testing';

import { EnvoyerService } from './envoyer.service';

describe('EnvoyerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvoyerService = TestBed.get(EnvoyerService);
    expect(service).toBeTruthy();
  });
});
