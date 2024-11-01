import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ConditionsAndZip } from '../../conditions-and-zip.type';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink],
  standalone: true,
})
export class CurrentConditionsComponent {
  private router = inject(Router);

  conditions = input<ConditionsAndZip[]>([]);
  removeCondition = output<string>();

  showForecast(zipcode: string) {
    this.router.navigate(['/forecast', zipcode]);
  }
}
