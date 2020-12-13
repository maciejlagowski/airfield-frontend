import {Component, Input, OnInit} from '@angular/core';
import {Reservation} from '../../../model/dto/reservation';
import {ReservationService} from '../../../services/reservation.service';
import {Status} from '../../../model/enum/status.enum';
import {JwtService} from '../../../services/jwt.service';

@Component({
  selector: 'app-detail-reservation-dialog',
  templateUrl: './detail-reservation-dialog.component.html',
  styleUrls: ['./detail-reservation-dialog.component.css']
})
export class DetailReservationDialogComponent implements OnInit {

  @Input()
  reservation: Reservation;

  constructor(private reservationService: ReservationService, private jwtService: JwtService) {
  }

  ngOnInit(): void {
  }

  rejectReservation(): void {
    this.updateStatus(Status.REJECTED);
  }

  acceptReservation(): void {
    this.updateStatus(Status.ACCEPTED);
  }

  updateStatus(status: Status): void {
    this.reservationService.updateStatus(this.reservation.reservationId, status).subscribe();
    location.reload();
  }

  isUserEmployee(): boolean {
    return this.jwtService.isUserEmployee();
  }
}
