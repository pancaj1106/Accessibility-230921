import { Component, OnInit, ViewChild } from '@angular/core';
import { Dropdown } from 'primeng/dropdown';

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
  @ViewChild('dropdown') dropdownToFocus: Dropdown | undefined;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      if(this.dropdownToFocus !== null){
        this.dropdownToFocus?.focus();
      }
    }, 500);
  }

}
