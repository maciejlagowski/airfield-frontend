import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {Weather} from '../../model/dto/weather';
import {StaticToolsService} from '../../services/static-tools.service';
import {catchError} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ErrorService} from '../../services/error.service';
import {ErrorEnum} from '../../model/enum/error.enum';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: Weather;
  weatherLoaded: Promise<boolean>;
  date: string;

  constructor(private weatherService: WeatherService, private errorService: ErrorService) {
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
        this.errorService.removeError(ErrorEnum.SERVER_ERROR);
      });
  }

  handleError(error: HttpErrorResponse): Observable<any> {
    return new Observable<Weather>();
  }
}
