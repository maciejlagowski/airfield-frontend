import {Component, OnInit} from '@angular/core';
import {NotificationEnum} from '../../model/enum/notification.enum';
import {NotificationService} from '../../services/notification.service';
import {JwtService} from '../../services/jwt.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private notificationService: NotificationService, private jwtService: JwtService) {
  }

  ngOnInit(): void {
    if (this.isUserNotLogged()) {
      this.notificationService.addNotification(NotificationEnum.NOT_LOGGED_ERROR, 'User not logged in, please log in or register');
    }
  }


  getNotifications(): [NotificationEnum, string][] {
    return Array.from(this.notificationService.notifications.entries());
  }

  isUserNotLogged(): boolean {
    return !this.jwtService.isUserLogged();
  }

  removeNotification(notification: NotificationEnum): void {
    this.notificationService.removeNotification(notification);
  }

  getAlertType(notification: NotificationEnum): string {
    switch (notification) {
      case NotificationEnum.ANGULAR_ERROR:
      case NotificationEnum.NOT_LOGGED_ERROR:
      case NotificationEnum.SERVER_ERROR:
        return 'alert-danger';
      case NotificationEnum.OK_NOTIFICATION:
        return 'alert-success';
      case NotificationEnum.WARNING_NOTIFICATION:
        return 'alert-warning';
    }
  }
}
