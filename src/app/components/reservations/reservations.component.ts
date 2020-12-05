import {Component, OnInit} from '@angular/core';
import {Reservation} from '../../model/dto/reservation';
import {ReservationService} from '../../services/reservation.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DetailReservationDialogComponent} from './detail-reservation-dialog/detail-reservation-dialog.component';
import {StaticToolsService} from '../../services/static-tools.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservations: Reservation[];
  date: string;

  constructor(private reservationService: ReservationService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.date = StaticToolsService.getCurrentDate();
    this.updateReservations();
  }

  updateReservations(): void {
    this.reservationService.findAll(this.date).subscribe(data => {
      this.reservations = data;
    });
  }

  getPhoneNumberWithDashes(phoneNumber: string): string {
    const sliced1: string = phoneNumber.slice(0, 3);
    const sliced2: string = phoneNumber.slice(3, 6);
    const sliced3: string = phoneNumber.slice(6, 9);
    return sliced1 + '-' + sliced2 + '-' + sliced3;
  }

  openDetails(reservation: Reservation): void {
    // TODO user/employee verification
    const detailDialog = this.modalService.open(DetailReservationDialogComponent);
    detailDialog.componentInstance.reservation = reservation;
  }
}
