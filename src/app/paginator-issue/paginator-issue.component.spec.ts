import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorIssueComponent } from './paginator-issue.component';

describe('PaginatorIssueComponent', () => {
  let component: PaginatorIssueComponent;
  let fixture: ComponentFixture<PaginatorIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
