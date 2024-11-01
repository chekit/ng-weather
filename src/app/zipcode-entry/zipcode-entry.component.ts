import { Component, inject } from '@angular/core';
import { LocationService } from '../services';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
})
export class ZipcodeEntryComponent {
  private locationService = inject(LocationService);

  addLocation(zipcode: string) {
    this.locationService.addLocation(zipcode);
  }
}
