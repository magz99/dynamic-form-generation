/* tslint:disable:no-unused-variable */

import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { RegisterService } from './register.service';

describe('Service: Register', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterService],
      imports: [HttpClientModule],
    });
  });

  it('should ...', inject([RegisterService], (service: RegisterService) => {
    expect(service).toBeTruthy();
  }));
});
