import { Component, inject, signal } from '@angular/core';
import { LocationService, WeatherService } from 'app/services';
import { CurrentConditionsComponent, ZipcodeEntryComponent } from 'app/shared/components';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  imports: [ZipcodeEntryComponent, CurrentConditionsComponent],
  standalone: true,
})
export class MainPageComponent {
  protected locationService = inject(LocationService);
  private weatherService = inject(WeatherService);

  protected state = signal<{ error: any }>({ error: null });

  currentConditions = this.weatherService.getCurrentConditions();

  onAddLocation(zipcode: string) {
    this.state.update(state => ({ ...state, error: null }));

    if (!this.locationService.locations().includes(zipcode)) {
      this.weatherService.addCurrentConditions(zipcode).subscribe({
        next: () => this.locationService.addLocation(zipcode),
        error: err => this.state.update(state => ({ ...state, error: err })),
      });
    }
  }
}
