import { TestBed } from '@angular/core/testing';

import { VerifyProfileInterceptor } from './verify-profile.interceptor';

describe('VerifyProfileInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      VerifyProfileInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: VerifyProfileInterceptor = TestBed.inject(VerifyProfileInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
