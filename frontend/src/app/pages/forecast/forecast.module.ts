import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import { ForecastRoutingModule } from './forecast-routing.module';
import { ForecastComponent } from './page/forecast/forecast.component';
import { ForecastInfoComponent } from './components/forecast-info/forecast-info.component';


@NgModule({
  declarations: [
    ForecastComponent,
    ForecastInfoComponent
  ],
  imports: [
    CommonModule,
    ForecastRoutingModule,
    MatTableModule
  ]
})
export class ForecastModule { }
