import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // Utiliza setTimeout para esperar 10 segundos y luego redirige a la página de servicios
    setTimeout(() => {
      this.router.navigate(['/feed']);
    }, 10000); // 10000 milisegundos = 10 segundos
  }
}
