import { TestBed } from '@angular/core/testing';

import { QuestionSettingsService } from './question-settings.service';

describe('QuestionSettingsService', () => {
  let service: QuestionSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
