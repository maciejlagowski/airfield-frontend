import {Component, OnInit} from '@angular/core';
import {Reservation} from '../../model/reservation';
import {ReservationService} from '../../services/reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservations: Reservation[];

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.findAll().subscribe(data => {
      this.reservations = data;
    });
  }

  getCurrentDate(): string {
    const date: Date = new Date();
    const dd: string = String(date.getDate()).padStart(2, '0');
    const mm: string = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy: string = String(date.getFullYear());
    return yyyy + '-' + mm + '-' + dd;
  }
}
