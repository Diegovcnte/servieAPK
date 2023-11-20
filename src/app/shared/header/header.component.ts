// header.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div [class]="rojoClass">
      <div class="ion-text-center fondito">
        <h1 class="tituloh1">{{ title }}<strong>{{ titlestrong }}</strong></h1>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title!: string;
  @Input() titlestrong!: string;
  @Input() isModal!: boolean;
  @Input() rojoClass: string = 'app-header';
}