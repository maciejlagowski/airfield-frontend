import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {Reservation} from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private readonly reservationsUrl: string;

  constructor(private http: HttpClient) {
    this.reservationsUrl = 'http://localhost:8080/reservations';
  }

  public findAll(date: string): Observable<Reservation[]> {
    const params: HttpParams = new HttpParams().set('date', date);
    return this.http.get<Reservation[]>(this.reservationsUrl, {params});
  }

  public save(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.reservationsUrl, reservation);
  }
}
