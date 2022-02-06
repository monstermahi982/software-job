import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobcandidateComponent } from './jobcandidate.component';

describe('JobcandidateComponent', () => {
  let component: JobcandidateComponent;
  let fixture: ComponentFixture<JobcandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobcandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobcandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
