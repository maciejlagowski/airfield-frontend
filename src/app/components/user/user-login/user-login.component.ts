import {Component, OnInit} from '@angular/core';
import {User} from '../../../model/dto/user';
import {JwtService} from '../../../services/jwt.service';
import {NotificationService} from '../../../services/notification.service';
import {NotificationEnum} from '../../../model/enum/notification.enum';
import {UserService} from '../../../services/user.service';
import {StaticToolsService} from '../../../services/static-tools.service';

@Component({
  selector: 'app-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  model: any = {};
  user: User = new User();
  passwordReset = false;

  constructor(private jwtService: JwtService, private notificationService: NotificationService, private userService: UserService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.jwtService.login(this.user);
    this.notificationService.removeNotification(NotificationEnum.SERVER_ERROR);
    this.notificationService.removeNotification(NotificationEnum.OK_NOTIFICATION);
  }

  logout(): void {
    this.jwtService.logout();
  }

  isUserLogged(): boolean {
    return this.jwtService.isUserLogged();
  }

  resetPassword(): void {
    this.userService.resetPassword(this.user.email).subscribe(() => {
      this.passwordReset = !this.passwordReset;
      this.notificationService.removeNotification(NotificationEnum.SERVER_ERROR);
      this.notificationService.addNotification(NotificationEnum.OK_NOTIFICATION, 'A link to reset password was sent to your email');
    });
  }

  isEmailValid(): boolean {
    return StaticToolsService.isEmailValid(this.user.email);
  }
}
