import { Component, inject } from '@angular/core';
import { LocationService, WeatherService } from '../services';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
})
export class ZipcodeEntryComponent {
  private locationService = inject(LocationService);
  private weatherService = inject(WeatherService);

  addLocation(zipcode: string) {
    this.locationService.addLocation(zipcode);
    this.weatherService.addCurrentConditions(zipcode);
  }
}
