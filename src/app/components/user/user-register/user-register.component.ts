import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../model/dto/user';
import {UserService} from '../../../services/user.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NotificationService} from '../../../services/notification.service';
import {NotificationEnum} from '../../../model/enum/notification.enum';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  user: User;
  passwordRep = '';

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private modalService: NgbModal,
    private notificationService: NotificationService
  ) {
    this.user = new User();
  }

  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  onSubmit(): void {
    // TODO validation email and phone
    this.userService.register(this.user).subscribe(result => {
      this.notificationService.addNotification(NotificationEnum.OK_NOTIFICATION, 'User registered successfully.');
    });
  }
}
