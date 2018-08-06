import { TestBed, inject } from '@angular/core/testing';
import { NotesdataService } from './notesdata.service';

describe('NotesdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotesdataService]
    });
  });

  it('should be created', inject([NotesdataService], (service: NotesdataService) => {
    expect(service).toBeTruthy();
  }));
});
