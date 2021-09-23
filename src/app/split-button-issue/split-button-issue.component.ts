import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-split-button-issue',
  templateUrl: './split-button-issue.component.html'
})
export class SplitButtonIssueComponent implements OnInit {

  constructor() { }
  splitActionButtons: MenuItem[] = [];
  ngOnInit(): void {
    this.splitActionButtons = [
      {
        label: 'Delete', icon: 'pi pi-times', command: () => {
        }
      }
    ];
  }
}
