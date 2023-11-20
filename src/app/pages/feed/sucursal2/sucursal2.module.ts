import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sucursal2PageRoutingModule } from './sucursal2-routing.module';

import { Sucursal2Page } from './sucursal2.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sucursal2PageRoutingModule,
    SharedModule,
  ],
  declarations: [Sucursal2Page]
})
export class Sucursal2PageModule {}
