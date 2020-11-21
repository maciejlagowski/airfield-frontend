import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {Weather} from '../../model/dto/weather';
import {StaticToolsService} from '../../services/static-tools.service';
import {catchError} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: Weather;
  weatherLoaded: Promise<boolean>;
  date: string;

  constructor(private weatherService: WeatherService) {
    this.date = StaticToolsService.getCurrentDate();
  }

  ngOnInit(): void {
    this.updateWeather();
  }

  updateWeather(): void {
    this.weatherService.getWeatherByDay(this.date)
      .pipe(catchError(this.handleError))
      .subscribe(data => {
        this.weather = data;
        this.weatherLoaded = Promise.resolve(true);
      });
  }

  handleError(error: HttpErrorResponse): Observable<any> {
    console.log('Error'); // TODO
    return throwError(error);
  }

}
