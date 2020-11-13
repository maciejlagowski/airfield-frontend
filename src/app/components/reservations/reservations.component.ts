import {Component, Input, OnInit} from '@angular/core';
import {Reservation} from '../../model/reservation';
import {ReservationService} from '../../services/reservation.service';
import {User} from '../../model/user';
import {Status} from '../../model/status.enum';
import {newArray} from '@angular/compiler/src/util';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservations: Reservation[];
  date: string;
  @Input()
  loggedUser: User;

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.date = this.getCurrentDate();
    this.updateReservations();
  }

  getCurrentDate(): string {
    const date: Date = new Date();
    const dd: string = String(date.getDate()).padStart(2, '0');
    const mm: string = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy: string = String(date.getFullYear());
    return yyyy + '-' + mm + '-' + dd;
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
}
