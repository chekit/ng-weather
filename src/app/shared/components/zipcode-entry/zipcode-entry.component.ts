import { Component, output } from '@angular/core';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
  standalone: true,
})
export class ZipcodeEntryComponent {
  addLocation = output<string>();
}
