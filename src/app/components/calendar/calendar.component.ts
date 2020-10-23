import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  getCurrentDate(): string {
    const date: Date = new Date();
    const dd: string = String(date.getDate()).padStart(2, '0');
    const mm: string = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy: string = String(date.getFullYear());
    return yyyy + '-' + mm + '-' + dd;
  }

  onClickAddNewReservation(): void {

  }
}
