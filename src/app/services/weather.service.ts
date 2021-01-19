import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Weather} from '../model/dto/weather';
import {WeatherAlert} from '../model/dto/weather-alert';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly weatherUrl: string;

  constructor(private http: HttpClient) {
    this.weatherUrl = 'http://localhost:8080/weather';
  }

  public getWeatherByDay(date: string): Observable<Weather> {
    return this.http.get<Weather>(this.weatherUrl + '/' + date);
  }

  public getAlerts(): Observable<WeatherAlert[]> {
    return this.http.get<WeatherAlert[]>(this.weatherUrl + '/alerts');
  }
}
