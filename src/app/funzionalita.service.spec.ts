import { TestBed } from '@angular/core/testing';

import { FunzionalitaService } from './funzionalita.service';

describe('FunzionalitaService', () => {
  let service: FunzionalitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunzionalitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
