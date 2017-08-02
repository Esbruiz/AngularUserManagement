import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from "../models/User";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Output() userCreated = new EventEmitter();
  newUSer: User = new User();
  active: boolean = true;

  ngOnInit() {
  }

  onSubmit() {
    this.userCreated.emit({user: this.newUSer});
    this.newUSer = new User();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

}
