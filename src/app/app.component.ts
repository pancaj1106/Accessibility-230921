import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'acc-primeng-issues';
  isDropdown: boolean = true;
  isInlineedit: boolean = false;
  isPaginator: boolean = false;
  isSplitButton: boolean = false;
  isCalendar: boolean = false;

  updateStatus(isDropdown: boolean,
    isInlineedit: boolean,
    isPaginator: boolean,
    isSplitButton: boolean,
    isCalendar: boolean) {
    this.isDropdown = isDropdown;
    this.isInlineedit = isInlineedit;
    this.isPaginator = isPaginator;
    this.isSplitButton = isSplitButton;
    this.isCalendar = isCalendar;
  }
}
