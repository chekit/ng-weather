import { Directive } from '@angular/core';

@Directive()
export abstract class TabElementBase {
  abstract remove(): void;
}
