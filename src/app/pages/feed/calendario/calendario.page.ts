import { Component } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage {
  selectedDate: Date | null = null;

  constructor() { }

  ngOnInit() {
  }

}
