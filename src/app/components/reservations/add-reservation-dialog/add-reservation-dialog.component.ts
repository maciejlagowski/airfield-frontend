import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ReservationService} from '../../../services/reservation.service';
import {Reservation} from '../../../model/reservation';
import {Time} from '@angular/common';
import {NgModel} from '@angular/forms';
import {User} from '../../../model/user';
import {compareNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

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
  isNewUser: boolean;
  user: User;

  constructor(private modalService: NgbModal, private reservationService: ReservationService) {
    this.reservation = new Reservation();
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
    if (this.isHoursConflictExists()) {
      console.log('error conflict'); // TODO
    } else {
      this.reservationService.save(this.reservation).subscribe();
    }
  }

  isHoursConflictExists(): boolean {
    for (const reservation of this.reservations) {
      if (this.reservation.collides(reservation)) {
        console.log('errorrrrrr');
        return true;
      }
    }
    console.log('not eror?');
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
    this.reservation.userId = user.id;
  }
}
