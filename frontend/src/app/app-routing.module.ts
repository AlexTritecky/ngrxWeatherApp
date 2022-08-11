import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/weather-main/weather-main.module').then(m => m.WeatherMainModule),
  },
  {
    path: 'forecast',
    loadChildren: () => import('./pages/forecast/forecast.module').then(m => m.ForecastModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
