import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {Weather} from '../../model/dto/weather';
import {StaticToolsService} from '../../services/static-tools.service';
import {catchError} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NotificationService} from '../../services/notification.service';
import {NotificationEnum} from '../../model/enum/notification.enum';
import {WeatherAlert} from '../../model/dto/weather-alert';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {WeatherAlertDetailsComponent} from './weather-alert-details/weather-alert-details.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: Weather;
  date: string;
  alerts: WeatherAlert[];

  constructor(private weatherService: WeatherService, private notificationService: NotificationService,
              private modalService: NgbModal) {
    this.date = StaticToolsService.getCurrentDate();
  }

  ngOnInit(): void {
    this.updateAlerts();
    this.updateWeather();
  }

  updateWeather(): void {
    this.weatherService.getWeatherByDay(this.date)
      .pipe(catchError(this.handleError))
      .subscribe(data => {
        this.weather = data;
        this.notificationService.removeNotification(NotificationEnum.SERVER_ERROR);
      });
  }

  updateAlerts(): void {
    this.weatherService.getAlerts()
      .pipe(catchError(this.handleError))
      .subscribe(data => {
        this.alerts = data;
        this.notificationService.removeNotification(NotificationEnum.SERVER_ERROR);
      });
  }

  handleError(error: HttpErrorResponse): Observable<any> {
    return new Observable<any>();
  }

  openAlertDetails(alert: WeatherAlert): void {
    const detailDialog = this.modalService.open(WeatherAlertDetailsComponent);
    detailDialog.componentInstance.alert = alert;
  }
}
