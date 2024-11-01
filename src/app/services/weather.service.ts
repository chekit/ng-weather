import { inject, Injectable, Signal, signal } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { CurrentConditions } from '../components/current-conditions/current-conditions.type';
import { ConditionsAndZip } from '../conditions-and-zip.type';
import { Forecast } from '../pages/forecasts-list/forecast.type';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  static URL = 'https://api.openweathermap.org/data/2.5';
  static APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static ICON_URL =
    'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';

  private currentConditions = signal<ConditionsAndZip[]>([]);

  private http = inject(HttpClient);

  addCurrentConditions(zip: string): void {
    // Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
    this.http
      .get<CurrentConditions>(
        `${WeatherService.URL}/weather?zip=${zip},us&units=imperial&APPID=${WeatherService.APPID}`
      )
      .subscribe(data =>
        this.currentConditions.update(conditions => [
          ...conditions,
          { zip, data, iconUrl: this.getWeatherIcon(data.weather[0].id) },
        ])
      );
  }

  removeCurrentConditions(zipcode: string) {
    this.currentConditions.update(conditions => {
      for (let i in conditions) {
        if (conditions[i].zip == zipcode) conditions.splice(+i, 1);
      }
      return conditions;
    });
  }

  getCurrentConditions(): Signal<ConditionsAndZip[]> {
    return this.currentConditions.asReadonly();
  }

  getForecast(zipcode: string): Observable<Forecast> {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http.get<Forecast>(
      `${WeatherService.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.APPID}`
    );
  }

  private getWeatherIcon(id: number): string {
    let imageName = 'art_clear.png';

    if (id >= 200 && id <= 232) {
      imageName = 'art_storm.png';
    }
    if (id >= 501 && id <= 511) {
      imageName = 'art_rain.png';
    }
    if (id === 500 || (id >= 520 && id <= 531)) {
      imageName = 'art_light_rain.png';
    }
    if (id >= 600 && id <= 622) {
      imageName = 'art_snow.png';
    }
    if (id >= 801 && id <= 804) {
      imageName = 'art_clouds.png';
    }
    if (id === 741 || id === 761) {
      imageName = 'art_fog.png';
    }

    return `${WeatherService.ICON_URL}${imageName}`;
  }
}
