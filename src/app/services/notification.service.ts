import {Injectable} from '@angular/core';
import {NotificationEnum} from '../model/enum/notification.enum';
import {StaticToolsService} from './static-tools.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications: Map<NotificationEnum, string>;

  constructor() {
    this.notifications = new Map();
  }

  addNotification(type: NotificationEnum, message: string): void {
    this.notifications.set(type, this.getDate() + message);
  }

  removeNotification(notification: NotificationEnum): void {
    this.notifications.delete(notification);
  }

  getDate(): string {
    return '[' + StaticToolsService.getCurrentDateTime(true) + '] ';
  }
}
