import { Component, Input, OnInit } from '@angular/core';
import { IForecastResponse } from '@models/forecast-response/forecast-response.interface';

@Component({
  selector: 'app-forecast-info',
  templateUrl: './forecast-info.component.html',
  styleUrls: ['./forecast-info.component.scss']
})
export class ForecastInfoComponent implements OnInit {
  @Input() forecast!: IForecastResponse;
  constructor() { }

  ngOnInit(): void {
  }

}
