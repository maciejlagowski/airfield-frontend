import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ReservationService} from '../../../services/reservation.service';
import {Reservation} from '../../../model/reservation';
import {User} from '../../../model/user';
import {ReservationType} from '../../../model/reservation-type.enum';
import {Status} from '../../../model/status.enum';

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
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(): void {
    this.reservation.date = this.date;
    this.reservation.reservationType = this.reservationType;
    this.user = this.loggedUser;
    this.reservation.userId = this.user.id;
    console.log(this.user);
    this.reservationService.save(this.reservation).subscribe();
    javascript:window.location.reload();
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
