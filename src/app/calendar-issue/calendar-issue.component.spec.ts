import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarIssueComponent } from './calendar-issue.component';

describe('CalendarIssueComponent', () => {
  let component: CalendarIssueComponent;
  let fixture: ComponentFixture<CalendarIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
