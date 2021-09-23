import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitButtonIssueComponent } from './split-button-issue.component';

describe('SplitButtonIssueComponent', () => {
  let component: SplitButtonIssueComponent;
  let fixture: ComponentFixture<SplitButtonIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitButtonIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitButtonIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
