import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-patron',
  templateUrl: './patron.component.html',
  styleUrls: ['./patron.component.scss'],
})
export class PatronComponent  implements OnInit {

  @Input() class!: string; /* Para saber cual es el tipo de input que se utilizará */


  constructor() { }

  ngOnInit() {}

}
