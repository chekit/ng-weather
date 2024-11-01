import { Component, inject } from '@angular/core';
import { WeatherService } from 'app/services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  private weatherService = inject(WeatherService);

  currentConditions = this.weatherService.getCurrentConditions();
}
