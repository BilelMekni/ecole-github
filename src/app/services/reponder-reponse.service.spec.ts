import { TestBed } from '@angular/core/testing';

import { ReponderReponseService } from './reponder-reponse.service';

describe('ReponderReponseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReponderReponseService = TestBed.get(ReponderReponseService);
    expect(service).toBeTruthy();
  });
});
