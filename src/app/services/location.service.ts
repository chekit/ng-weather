import { Inject, Injectable, signal } from '@angular/core';
import { BROWSER_STORAGE } from './browser-stotage.token';

export const LOCATIONS: string = 'locations';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private $locations = signal<string[]>([]);

  constructor(@Inject(BROWSER_STORAGE) private storage: Storage) {
    let locString = storage.getItem(LOCATIONS);

    if (locString) {
      this.$locations.set(JSON.parse(locString));
    }
  }

  get locations() {
    return this.$locations.asReadonly();
  }

  addLocation(zipcode: string) {
    this.$locations.update(codes => [...codes, zipcode]);
    this.storage.setItem(LOCATIONS, JSON.stringify(this.$locations()));
  }

  removeLocation(zipcode: string) {
    let index = this.$locations().indexOf(zipcode);
    if (index !== -1) {
      this.$locations.update(codes => {
        const copy = [...codes];
        copy.splice(index, 1);
        return copy;
      });
      this.storage.setItem(LOCATIONS, JSON.stringify(this.$locations()));
    }
  }
}
