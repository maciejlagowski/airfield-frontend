export class Reservation {
  date: Date;
  startTime: string;
  endTime: string;
  name: string;
  telephone: string;
  reservationType: string;
  userId: string;
  reservationId: string;

  public collides(reservation: Reservation): boolean {
    return (this.startTime > reservation.startTime && this.startTime < reservation.endTime) ||
      (this.endTime > reservation.startTime && this.endTime < reservation.endTime);
  }
}
