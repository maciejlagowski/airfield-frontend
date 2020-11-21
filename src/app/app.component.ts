import {Component} from '@angular/core';
import {User} from './model/dto/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'airfield-frontend';
  loggedUser: User;

  getUser(isEmployee: boolean): User { // TODO LOGIN
    const user = new User();
    user.isEmployee = isEmployee;
    user.id = '1';
    user.name = 'Bogdan';
    user.phone = '123456789';
    return user;
  }
}
