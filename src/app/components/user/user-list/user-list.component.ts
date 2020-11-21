import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../model/dto/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  @Output()
  userEvent = new EventEmitter<User>();
  searchText: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
  selectUser(user: User): void {
    this.userEvent.emit(user);
  }
}
