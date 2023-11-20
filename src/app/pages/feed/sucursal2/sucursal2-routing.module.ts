import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sucursal2Page } from './sucursal2.page';

const routes: Routes = [
  {
    path: '',
    component: Sucursal2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sucursal2PageRoutingModule {}
