import { Component, inject, OnInit } from '@angular/core';
import { LocationService, WeatherService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private locatioService = inject(LocationService);
  private weatherService = inject(WeatherService);

  ngOnInit(): void {
    const locations = this.locatioService.locations();

    for (const location of locations) {
      this.weatherService.addCurrentConditions(location).subscribe(() => console.info('🚀 Locations initialised'));
    }
  }
}
