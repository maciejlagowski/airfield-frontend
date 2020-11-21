import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ReservationService} from '../../../services/reservation.service';
import {Reservation} from '../../../model/dto/reservation';
import {User} from '../../../model/dto/user';
import {ReservationType} from '../../../model/enum/reservation-type.enum';
import {Status} from '../../../model/enum/status.enum';

@Component({
  selector: 'app-add-reservation-dialog',
  templateUrl: './add-reservation-dialog.component.html',
  styleUrls: ['./add-reservation-dialog.component.css']
})
export class AddReservationDialogComponent implements OnInit {
  closeResult = '';
  reservation: Reservation;
  @Input()
  reservations: Reservation[];
  @Input()
  date: string;
  isNewUser: boolean;
  user: User;
  reservationTypes: string[] = Object.keys(ReservationType);
  reservationType: ReservationType;
  @Input()
  loggedUser: User;

  constructor(private modalService: NgbModal, private reservationService: ReservationService) {
    this.reservation = new Reservation();
    this.reservation.status = Status.NEW;
  }

  ngOnInit(): void {
  }

  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  onSubmit(): void {
    this.reservation.date = this.date;
    this.reservation.reservationType = this.reservationType;
    this.user = this.loggedUser;
    this.reservation.userId = this.user.id;
    this.reservationService.save(this.reservation).subscribe();
    location.reload();
  }

  isHoursConflictExists(): boolean {
    for (const reservation of this.reservations) {
      if (this.reservation.collides(reservation)) {
        return true;
      }
    }
    return false;
  }

  timeStringToMinutes(stringTime: string): number {
    const split: string[] = stringTime.split(':');
    return Number(split[0]) * 60 + Number(split[1]);
  }

  getTimeDifference(): number {
    if (this.reservation.startTime === undefined || this.reservation.endTime === undefined) {
      return 0;
    }
    return this.timeStringToMinutes(this.reservation.endTime) - this.timeStringToMinutes(this.reservation.startTime);
  }

  setUser(user: User): void {
    this.user = user;
  }
}
