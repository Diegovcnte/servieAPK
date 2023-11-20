import { Component, OnInit, inject } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SwitchService } from 'src/app/services/switch.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  constructor(private modalSS: SwitchService, private router: Router) {}

  ngOnInit() {}

  signOut() {
    this.firebaseSvc.signOut();
    this.modalSS.$modal.emit(false);
  }

  closeModal() {
    this.modalSS.$modal.emit(false);
  }

  redirectToVersion() {
    // Aquí defines la ruta a la página de versión
    const versionPageRoute = '/version'; // Ajusta la ruta según tu configuración de enrutamiento

    // Realiza la redirección
    this.router.navigate([versionPageRoute]);
  }
}