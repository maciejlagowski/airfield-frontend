import {Component, OnInit} from '@angular/core';
import {User} from '../../../model/dto/user';
import {JwtService} from '../../../services/jwt.service';
import {NotificationService} from '../../../services/notification.service';
import {NotificationEnum} from '../../../model/enum/notification.enum';

@Component({
  selector: 'app-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  model: any = {};
  user: User = new User();

  constructor(private jwtService: JwtService, private notificationService: NotificationService) {
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

  // TODO password forget reset
}
