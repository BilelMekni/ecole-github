import { TestBed } from '@angular/core/testing';

import { UpdateExaminService } from './update-examin.service';

describe('UpdateExaminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateExaminService = TestBed.get(UpdateExaminService);
    expect(service).toBeTruthy();
  });
});
