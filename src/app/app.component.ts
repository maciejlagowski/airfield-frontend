import {Component} from '@angular/core';
import {Role} from './model/enum/role.enum';
import {ErrorService} from './services/error.service';
import {ErrorEnum} from './model/enum/error.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'airfield-frontend';

  constructor(private errorService: ErrorService) {
    if (this.isUserNotLogged()) {
      this.errorService.addError(ErrorEnum.NOT_LOGGED, 'User not logged in, please log in or register');
    }
  }

  getErrors(): [ErrorEnum, string][] {
    return Array.from(this.errorService.errors.entries());
  }

  isUserNotLogged(): boolean {
    const role = localStorage.getItem('USER_ROLE');
    return role === null || Role[role] === Role.ROLE_NOT_LOGGED;
  }

  removeError(error: ErrorEnum): void {
    this.errorService.removeError(error);
  }
}
