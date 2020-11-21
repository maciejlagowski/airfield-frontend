import {Component, OnInit} from '@angular/core';
import {Weather} from '../../../model/dto/weather';
import {WeatherService} from '../../../services/weather.service';
import {StaticToolsService} from '../../../services/static-tools.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  weather: Weather;
  weatherLoaded: Promise<boolean>;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weatherService.getWeatherByDay(StaticToolsService.getCurrentDate()).subscribe(data => {
      this.weather = data;
      this.weatherLoaded = Promise.resolve(true);
    });
  }

}
