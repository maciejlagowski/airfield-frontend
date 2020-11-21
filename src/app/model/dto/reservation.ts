import {ReservationType} from '../enum/reservation-type.enum';
import {Status} from '../enum/status.enum';

export class Reservation {
  date: string;
  startTime: string;
  endTime: string;
  name: string;
  telephone: string;
  reservationType: ReservationType;
  userId: string;
  reservationId: string;
  status: Status;

  public collides(reservation: Reservation): boolean {
    return (this.startTime > reservation.startTime && this.startTime < reservation.endTime) ||
      (this.endTime > reservation.startTime && this.endTime < reservation.endTime) ||
      (this.startTime < reservation.startTime && this.endTime > reservation.endTime) ||
      (reservation.startTime < this.startTime && reservation.endTime > this.endTime);
  }
}
