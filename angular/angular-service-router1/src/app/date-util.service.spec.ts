/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DateUtilService } from './date-util.service';

describe('Service: DateUtil', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateUtilService]
    });
  });

  it('should ...', inject([DateUtilService], (service: DateUtilService) => {
    expect(service).toBeTruthy();
  }));
});
