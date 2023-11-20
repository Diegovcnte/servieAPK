import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.page.html',
  styleUrls: ['./sucursales.page.scss'],
})
export class SucursalesPage {

  constructor(private router: Router) { }

  irASucursal(sucursal: string, direccion: string) {
    // Puedes ajustar la lógica de redirección según tus necesidades
    this.router.navigate(['/detalle-sucursal', { sucursal, direccion }]);
  }

  abrirEnlaceExterno(enlace: string) {
    window.open(enlace, '_blank'); // Abre enlace externo en una nueva ventana/tab
  }
}
