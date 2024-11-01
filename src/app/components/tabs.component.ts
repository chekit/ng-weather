import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'tabs-component',
  template: `
    <div class="tabs">
      <ul class="tabs-switch">
        <li class="tabs-switch__item">tab (1) <button class="tabs-switch__close">X</button></li>
        <li class="tabs-switch__item">tab (2) <button class="tabs-switch__close">X</button></li>
      </ul>
      <div class="tabs-preview"><ng-content></ng-content></div>
    </div>
  `,
  styles: `
    .tabs-switch {
      display: flex;
      gap: 5px;
      padding: 0;
      margin: 0;
      list-style-type: none;
    }

    .tabs-switch__item {
      padding: 5px 10px;
      border: 1px solid #57595d;
      background-color: #617aa0;
      color: white;
    }

    .tabs-switch__close {
      padding: 0;
      margin: 0 0 0 10px;
      border: none;
      background-color: transparent;
    }

    .tabs-preview {
      padding: 20px 15px;
      border: 1px solid #57595d;
    }
  `,
  imports: [CommonModule],
  standalone: true,
})
export class TabsComponent {}
