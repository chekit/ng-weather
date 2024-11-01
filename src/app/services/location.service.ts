import { Injectable, signal } from '@angular/core';

export const LOCATIONS: string = 'locations';

@Injectable()
export class LocationService {
  private $locations = signal<string[]>([]);

  constructor() {
    let locString = localStorage.getItem(LOCATIONS);

    if (locString) {
      this.$locations.set(JSON.parse(locString));
    }
  }

  get locations() {
    return this.$locations.asReadonly();
  }

  addLocation(zipcode: string) {
    if (this.$locations().includes(zipcode)) return;

    this.$locations.update(codes => [...codes, zipcode]);
    localStorage.setItem(LOCATIONS, JSON.stringify(this.$locations()));
  }

  removeLocation(zipcode: string) {
    let index = this.$locations().indexOf(zipcode);
    if (index !== -1) {
      this.$locations.update(codes => {
        codes.splice(index, 1);
        return codes;
      });
      localStorage.setItem(LOCATIONS, JSON.stringify(this.$locations()));
    }
  }
}
