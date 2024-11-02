import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConditionsAndZip } from '../../conditions-and-zip.type';
import { CurrentConditionComponent } from './components/current-condition/current-condition.component';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink, CurrentConditionComponent],
  standalone: true,
})
export class CurrentConditionsComponent {
  conditions = input<ConditionsAndZip[]>([]);
  removeCondition = output<string>();
}
