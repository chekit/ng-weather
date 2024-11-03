import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'current-condition',
  templateUrl: './current-condition.component.html',
  styleUrl: './current-condition.component.css',
  imports: [CommonModule, RouterLink],
  standalone: true,
})
export class CurrentConditionComponent {
  location = input<any>();
  selfRemove = input(true);
  remove = output<string>();
}
