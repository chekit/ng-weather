import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window & { ref_timeout?: number }>('Global Window', {
  providedIn: 'root',
  factory: () => window,
});
