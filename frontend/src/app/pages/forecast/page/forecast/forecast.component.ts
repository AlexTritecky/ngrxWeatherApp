import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IForecastResponse } from '@models/forecast-response/forecast-response.interface';
import { WeatherApiService } from '@services/weather-api.service';
import { filter, Observable, pluck, switchMap } from 'rxjs';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent {
  forecastData$!: Observable<IForecastResponse>;
  constructor(private service: WeatherApiService, private route: ActivatedRoute) {
    this.forecastData$ = this.route.params.pipe(
      pluck('id'),
      filter(id => !!id),
      switchMap(id => this.service.getForecast(id)),
    );
  }
}
