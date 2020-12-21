import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../model/dto/user';
import {NotificationService} from '../../../services/notification.service';
import {NotificationEnum} from '../../../model/enum/notification.enum';
import {StaticToolsService} from '../../../services/static-tools.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {JwtService} from '../../../services/jwt.service';
import {Role} from '../../../model/enum/role.enum';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  @Input()
  user: User;
  @Input()
  userChange: User;
  nameChange = false;
  phoneChange = false;
  passwordChange = false;
  passwordRep = '';
  emailConfirm = '';
  roles: string[] = Object.keys(Role);

  @Input()
  adminPanel = false;


  constructor(private userService: UserService,
              private notificationService: NotificationService,
              private modalService: NgbModal,
              private jwtService: JwtService) {
  }

  ngOnInit(): void {
    if (!this.adminPanel) {
      this.userService.getLoggedUser().subscribe(data => {
        this.user = data;
        this.userChange = StaticToolsService.clone(data);
      });
    }
  }

  update(): void {
    this.userService.update(this.userChange).subscribe(() => {
      this.notificationService.removeNotification(NotificationEnum.SERVER_ERROR);
      this.notificationService.addNotification(NotificationEnum.OK_NOTIFICATION, 'Profile updated!');
      this.user = StaticToolsService.clone(this.userChange);
    });
  }

  isFormValid(): boolean {
    if (this.nameChange && this.userChange.name === '') {
      return false;
    }
    if (this.phoneChange && !this.isPhoneNumberValid()) {
      return false;
    }
    if (this.passwordChange) {
      if (this.userChange.password !== this.passwordRep || this.passwordRep === '') {
        return false;
      }
    }
    return (this.passwordChange || this.phoneChange || this.nameChange);
  }

  isPhoneNumberValid(): boolean {
    return StaticToolsService.isPhoneNumberValid(String(this.user.phoneNumber));
  }

  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  deleteAccount(): void {
    this.modalService.dismissAll();
    this.userService.delete(this.user).subscribe(() => {
      this.notificationService.removeNotification(NotificationEnum.SERVER_ERROR);
      this.notificationService.addNotification(NotificationEnum.OK_NOTIFICATION, 'User account removed');
      if (!this.adminPanel) {
        this.jwtService.logout();
      }
    });
  }

  isUserEmployee(): boolean {
    return this.jwtService.isUserEmployee();
  }

  changeUserRole(): void {
    this.modalService.dismissAll();
    this.userService.updateRole(this.userChange).subscribe(() => {
      this.notificationService.removeNotification(NotificationEnum.SERVER_ERROR);
      this.notificationService.addNotification(NotificationEnum.OK_NOTIFICATION, 'User role updated!');
      this.user = StaticToolsService.clone(this.userChange);
    });
  }
}
