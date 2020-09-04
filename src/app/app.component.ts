import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ex1';

  admins = [];
  users = [];
  count: number=1;

  // push in the admin array
  pushAdmins(userName) {
    this.admins.push(userName);
  }

  // push in the user array
  pushUsers(userName) {
    this.users.push(userName);
  }

  // delete from the admin array
  handleDeleteAdmin(id) {
    this.admins.splice(id, 1);
    this.countDecrement(this.count)
    console.log("After DECEREMENT "+this.count)
  
  }
  // delete from the user array
  handleDeleteUser(id) {
    this.users.splice(id, 1);
  }

  countDecrement(countNum) {
    console.log("DECEREMENT "+this.count)
    this.count = countNum - 1;
    
    
    
  }
}
