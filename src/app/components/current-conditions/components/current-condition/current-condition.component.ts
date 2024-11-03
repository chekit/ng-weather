import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TabElementBase } from 'app/components/tabs/tab-element.base';
import { ConditionsAndZip } from 'app/conditions-and-zip.type';
import { LocationService, WeatherService } from 'app/services';

@Component({
  selector: 'current-condition',
  templateUrl: './current-condition.component.html',
  styleUrl: './current-condition.component.css',
  imports: [CommonModule, RouterLink],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentConditionComponent extends TabElementBase {
  protected locationService = inject(LocationService);
  private weatherService = inject(WeatherService);

  location = input.required<ConditionsAndZip>();
  canSelfRemove = input(true);

  override remove(): void {
    const { zip } = this.location();

    this.locationService.removeLocation(zip);
    this.weatherService.removeCurrentConditions(zip);
  }
}
