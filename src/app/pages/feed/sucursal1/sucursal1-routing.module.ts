import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sucursal1Page } from './sucursal1.page';

const routes: Routes = [
  {
    path: '',
    component: Sucursal1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sucursal1PageRoutingModule {}
