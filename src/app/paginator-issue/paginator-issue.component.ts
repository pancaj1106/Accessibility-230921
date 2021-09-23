import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator-issue',
  templateUrl: './paginator-issue.component.html'
})
export class PaginatorIssueComponent implements OnInit {
  constructor() { }
  filteredUsers: any = [];

  ngOnInit(): void {
    this.filteredUsers = [
      {
        email: "test1@test.com",
        familyName: "Test",
        firstName: "Test1",
        laId: 820,
        laName: "Bedfordshire",
        userId: "ddf1da66-df86-4605-9f06-bbc67eed2aac"
      },
      {
        email: "test2@test.com",
        familyName: "Test",
        firstName: "Test1",
        laId: 820,
        laName: "Bedfordshire",
        userId: "ddf1da66-df86-4605-9f06-bbc67eeddaa1"
      }
      , {
        email: "test3@test.com",
        familyName: "Test",
        firstName: "Test1",
        laId: 820,
        laName: "Bedfordshire",
        userId: "ddf1da66-df86-4605-9f06-bbc67eeddaa34"
      }
      , {
        email: "test4@test.com",
        familyName: "Test",
        firstName: "Test1",
        laId: 820,
        laName: "Bedfordshire",
        userId: "ddf1da66-df86-4605-9f06-bbc67eeddaa21"
      }
    ]
  }
}
