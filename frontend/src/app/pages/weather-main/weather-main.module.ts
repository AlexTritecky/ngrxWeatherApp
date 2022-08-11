import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherMainRoutingModule } from './weather-main-routing.module';
import { WeatherMainComponent } from './page/weather-main/weather-main.component';


@NgModule({
  declarations: [
    WeatherMainComponent
  ],
  imports: [
    CommonModule,
    WeatherMainRoutingModule
  ]
})
export class WeatherMainModule { }
