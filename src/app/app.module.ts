import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplitButtonModule } from 'primeng/splitbutton';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownIssueComponent } from './dropdown-issue/dropdown-issue.component';
import { InlineEditingComponent } from './inline-editing/inline-editing.component';
import { FormsModule } from '@angular/forms';
import { CalendarIssueComponent } from './calendar-issue/calendar-issue.component';
import { SplitButtonIssueComponent } from './split-button-issue/split-button-issue.component';
import { PaginatorIssueComponent } from './paginator-issue/paginator-issue.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownIssueComponent,
    InlineEditingComponent,
    CalendarIssueComponent,
    SplitButtonIssueComponent,
    PaginatorIssueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    SplitButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
