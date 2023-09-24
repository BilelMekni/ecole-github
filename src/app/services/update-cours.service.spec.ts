import { TestBed } from '@angular/core/testing';

import { UpdateCoursService } from './update-cours.service';

describe('UpdateCoursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateCoursService = TestBed.get(UpdateCoursService);
    expect(service).toBeTruthy();
  });
});
