import { CommonModule } from '@angular/common';
import { Component, contentChild, effect, input, TemplateRef } from '@angular/core';

@Component({
  selector: 'tabs-component',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
  imports: [CommonModule],
  standalone: true,
})
export class TabsComponent {
  data = input<any>([]);

  tabContentTmpl = contentChild.required('tabContent', {
    read: TemplateRef,
  });

  constructor() {
    effect(() => {
      console.log(this.tabContentTmpl);
    });
  }
}
