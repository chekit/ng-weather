import { Component, inject } from '@angular/core';
import { LocationService, WeatherService } from 'app/services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  protected locationService = inject(LocationService);
  private weatherService = inject(WeatherService);

  currentConditions = this.weatherService.getCurrentConditions();

  onAddLocation(zipcode: string) {
    if (!this.locationService.locations().includes(zipcode)) {
      this.locationService.addLocation(zipcode);
      this.weatherService.addCurrentConditions(zipcode);
    }
  }

  onRemoveCondition(zipcode: string) {
    this.locationService.removeLocation(zipcode);
    this.weatherService.removeCurrentConditions(zipcode);
  }
}
