import {Component, OnInit} from '@angular/core';
import {User} from '../../model/dto/user';
import {EmailService} from '../../services/email.service';
import {Email} from '../../model/dto/email';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NotificationService} from '../../services/notification.service';
import {NotificationEnum} from '../../model/enum/notification.enum';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  email: Email;
  user: User;

  constructor(private emailService: EmailService, private modalService: NgbModal, private notificationService: NotificationService) {
    this.email = new Email();
  }

  ngOnInit(): void {
  }

  sendMail(): void {
    this.email.to = this.user.email;
    this.email.username = this.user.name;
    this.emailService.sendEmail(this.email).subscribe(() => {
      this.notificationService.addNotification(NotificationEnum.OK_NOTIFICATION, 'Email sent');
    });
  }

  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  setUser(user: User): void {
    this.user = user;
  }
}
