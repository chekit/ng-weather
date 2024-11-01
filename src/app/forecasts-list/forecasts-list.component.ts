import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { WeatherService } from '../services';
import { Forecast } from './forecast.type';

@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  styleUrls: ['./forecasts-list.component.css'],
})
export class ForecastsListComponent {
  protected weatherService = inject(WeatherService);
  private route = inject(ActivatedRoute);

  forecast$: Observable<Forecast> = this.route.params.pipe(
    map(params => params['zipcode']),
    filter(Boolean),
    switchMap((zipcode: string) => this.weatherService.getForecast(zipcode))
  );
}
