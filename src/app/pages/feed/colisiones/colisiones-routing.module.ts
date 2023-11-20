import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColisionesPage } from './colisiones.page';

const routes: Routes = [
  {
    path: '',
    component: ColisionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColisionesPageRoutingModule {}
