import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-issue',
  templateUrl: './dropdown-issue.component.html'
})
export class DropdownIssueComponent implements OnInit {
  meetingTypeCollection = [
    {
      value: 'Meeting',
      description: 'Governing body/committee meeting',
    },
    {
      value: 'Appeal',
      description: 'Appeal meeting'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
