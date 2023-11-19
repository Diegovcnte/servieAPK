import { Component, OnInit,inject } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SwitchService } from 'src/app/services/switch.service';
import { UtilsService } from 'src/app/services/utils.service';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent  implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  constructor(private modalSS: SwitchService) {}



  ngOnInit() {}

  signOut(){
    this.firebaseSvc.signOut();
  }

  closeModal(){

    this.modalSS.$modal.emit(false)

  }

}
