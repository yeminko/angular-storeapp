import { TestBed } from '@angular/core/testing';

import { AlertsServiceService } from './alerts-service.service';

describe('AlertsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertsServiceService = TestBed.inject(AlertsServiceService);
    expect(service).toBeTruthy();
  });
});
