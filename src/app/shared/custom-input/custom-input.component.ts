import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class CustomInputComponent  implements OnInit {

  @Input() control!: FormControl;
  @Input() type!: string; /* Para saber cual es el tipo de input que se utilizará */
  @Input() label!: string; /* Para identificar en que input estamos escribiendo */
  @Input() autocomplete!: string; /* Para que se puedan autocompletar algunos inputs */
  @Input() icon!: string; /* Para que sean mas indicativos los inputs */

  isPassword!: boolean; /* Sirve para identificar si estamos ingresando contraseña */
  hide: boolean =true; /* Contraseña oculta */

  constructor() { }

  ngOnInit() {
    if (this.type == 'password') this.isPassword = true;
  }


  showOrHidePassword(){
    this.hide  = !this.hide;

    if  (this.hide) this.type = 'password';
    else this.type = 'text';
  }

}
