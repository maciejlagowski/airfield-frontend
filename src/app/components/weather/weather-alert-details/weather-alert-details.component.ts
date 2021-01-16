import {Component, Input, OnInit} from '@angular/core';
import {WeatherAlert} from '../../../model/dto/weather-alert';

@Component({
  selector: 'app-weather-alert-details',
  templateUrl: './weather-alert-details.component.html',
  styleUrls: ['./weather-alert-details.component.css']
})
export class WeatherAlertDetailsComponent implements OnInit {

  @Input()
  alert: WeatherAlert;

  constructor() {
  }

  ngOnInit(): void {
  }

}
