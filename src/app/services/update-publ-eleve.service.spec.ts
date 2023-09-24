import { TestBed } from '@angular/core/testing';

import { UpdatePublEleveService } from './update-publ-eleve.service';

describe('UpdatePublEleveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdatePublEleveService = TestBed.get(UpdatePublEleveService);
    expect(service).toBeTruthy();
  });
});
