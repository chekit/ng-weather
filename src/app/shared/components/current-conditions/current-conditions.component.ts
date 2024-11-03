import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ConditionsAndZip } from '../../models/conditions-and-zip.type';
import { TabsComponent } from '../tabs/tabs.component';
import { CurrentConditionComponent } from './components/current-condition/current-condition.component';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css'],
  imports: [CommonModule, CurrentConditionComponent, TabsComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentConditionsComponent {
  conditions = input<ConditionsAndZip[]>([]);
}
