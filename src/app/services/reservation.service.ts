import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Reservation} from '../model/dto/reservation';
import {Status} from '../model/enum/status.enum';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private readonly reservationsUrl: string;

  constructor(private http: HttpClient) {
    this.reservationsUrl = 'http://localhost:8080/reservations';
  }

  public findAll(date: string): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.reservationsUrl + '/' + date);
  }

  public save(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.reservationsUrl, reservation);
  }

  public updateStatus(id: string, status: Status): Observable<Reservation> {
    const params: HttpParams = new HttpParams().set('status', status);
    return this.http.patch<Reservation>(this.reservationsUrl + '/' + id + '/status', {}, {params});
  }
}
