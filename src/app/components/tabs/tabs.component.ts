import { CommonModule } from '@angular/common';
import { Component, contentChild, effect, input, signal, TemplateRef } from '@angular/core';

@Component({
  selector: 'tabs-component',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
  imports: [CommonModule],
  standalone: true,
})
export class TabsComponent {
  data = input<any>([]);

  private state = signal<{ activeIndex: number }>({ activeIndex: 0 });

  tabContentTmpl = contentChild.required('tabContent', {
    read: TemplateRef,
  });
  tabTmpl = contentChild.required('tab', {
    read: TemplateRef,
  });

  constructor() {
    effect(() => {
      this.data();
    });
  }

  onSetActiveIndex(index: number) {
    if (this.state().activeIndex === index) return;

    this.state.update(state => ({ ...state, activeIndex: index }));
  }

  onRemoveIndex(event: Event, index: number) {
    event.stopPropagation();

    if (index === this.state().activeIndex) {
      this.state.update(state => ({ ...state, activeIndex: index - 1 > 0 ? index - 1 : 0 }));
    }
  }
}
