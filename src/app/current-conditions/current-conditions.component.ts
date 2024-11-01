import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { Router } from '@angular/router';
import { ConditionsAndZip } from '../conditions-and-zip.type';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentConditionsComponent {
  private router = inject(Router);

  conditions = input<ConditionsAndZip[]>([]);
  removeCondition = output<string>();

  showForecast(zipcode: string) {
    this.router.navigate(['/forecast', zipcode]);
  }
}
