import { Component, Output } from '@angular/core';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app works2!';

  users: User[] = [
    {"id": 25, "name": "Juan", "username": "Juancho"},
    {"id": 26, "name": "Pedro", "username": "Pancho"},
    {"id": 27, "name": "Carlos", "username": "Carlitos"},
  ];
  activeUser: User;

  selectUser(user: User)
  {
    this.activeUser = user;
    console.log(this.activeUser);
  }

  onUserCreated(event)
  {
    this.users.push(event.user);
    console.log(event);
  }
}
