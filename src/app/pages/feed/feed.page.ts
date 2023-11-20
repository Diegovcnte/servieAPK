import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';  // Importa AngularFireAuth
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  modalSwitch!: boolean;
  isAdmin: boolean = false; 
  user: any;

  constructor(
    private modalSS: SwitchService,
    private afAuth: AngularFireAuth 
  ) { }

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      this.isAdmin = user?.email === 'serviexpress@gmail.com';
     

    });

    // Suscríbete al servicio de cambio de modal
    this.modalSS.$modal.subscribe((valor) => {
      this.modalSwitch = valor;
    });
  }

  openModal() {
    this.modalSwitch = true;
  }
}
