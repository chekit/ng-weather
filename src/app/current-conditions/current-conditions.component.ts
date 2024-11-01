import { Component, effect, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { ConditionsAndZip } from '../conditions-and-zip.type';
import { LocationService, WeatherService } from '../services';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css'],
})
export class CurrentConditionsComponent {
  private router = inject(Router);

  protected weatherService = inject(WeatherService);
  protected locationService = inject(LocationService);

  conditions = input<ConditionsAndZip[]>([]);

  constructor() {
    effect(() => {
      console.log(this.conditions());
    });
  }

  showForecast(zipcode: string) {
    this.router.navigate(['/forecast', zipcode]);
  }
}
