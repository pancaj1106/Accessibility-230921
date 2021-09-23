import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-editing',
  templateUrl: './inline-editing.component.html'
})
export class InlineEditingComponent implements OnInit {

  constructor() { }
  filteredUsers: any = [];
  clonedUsers: { [s: string]: userModel } = {};

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

  onRowEditInit(user: userModel) {
    this.clonedUsers[user.userId] = { ...user };
  }

}

export class userModel {
  laName: string = '';
  userType: string = '';
  product: { name: string } = { name: '' };
  email: string = '';
  firstName: string = '';
  familyName: string = '';
  laId: string = '';
  active: string = '';
  userId: string = '';
  status: string = '';
  phoneNumber: string = '';
  role: string = '';
}
