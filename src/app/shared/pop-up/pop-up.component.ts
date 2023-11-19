import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent  implements OnInit {

  

  constructor(private modalSS: SwitchService) {}



  ngOnInit() {}

  closeModal(){

    this.modalSS.$modal.emit(false)

  }

}
