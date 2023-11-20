
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  template: '<div [class]="backgroundClass"></div>',
  styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent implements OnInit {
  @Input() backgroundClass: string = 'background';

  constructor() {}

  ngOnInit() {}
}