import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sucursal1PageRoutingModule } from './sucursal1-routing.module';

import { Sucursal1Page } from './sucursal1.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sucursal1PageRoutingModule,
    SharedModule
  ],
  declarations: [Sucursal1Page]
})
export class Sucursal1PageModule {}
