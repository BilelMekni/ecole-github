import { TestBed } from '@angular/core/testing';

import { UpdatePublicationsService } from './update-publications.service';

describe('UpdatePublicationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdatePublicationsService = TestBed.get(UpdatePublicationsService);
    expect(service).toBeTruthy();
  });
});
