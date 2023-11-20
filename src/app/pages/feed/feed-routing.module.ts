import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedPage } from './feed.page';

const routes: Routes = [
  {
    path: '',
    component: FeedPage
  },
  {
    path: 'reparaciones',
    loadChildren: () => import('./reparaciones/reparaciones.module').then( m => m.ReparacionesPageModule)
  },
  {
    path: 'mantenimientos',
    loadChildren: () => import('./mantenimientos/mantenimientos.module').then( m => m.MantenimientosPageModule)
  },
  {
    path: 'permisos',
    loadChildren: () => import('./permisos/permisos.module').then( m => m.PermisosPageModule)
  },
  {
    path: 'colisiones',
    loadChildren: () => import('./colisiones/colisiones.module').then( m => m.ColisionesPageModule)
  },
  {
    path: 'modificaciones',
    loadChildren: () => import('./modificaciones/modificaciones.module').then( m => m.ModificacionesPageModule)
  },
  {
    path: 'sucursales',
    loadChildren: () => import('./sucursales/sucursales.module').then( m => m.SucursalesPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'compra',
    loadChildren: () => import('./compra/compra.module').then( m => m.CompraPageModule)
  },
  {
    path: 'sucursal2',
    loadChildren: () => import('./sucursal2/sucursal2.module').then( m => m.Sucursal2PageModule)
  },
  {
    path: 'sucursal1',
    loadChildren: () => import('./sucursal1/sucursal1.module').then( m => m.Sucursal1PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedPageRoutingModule {}
