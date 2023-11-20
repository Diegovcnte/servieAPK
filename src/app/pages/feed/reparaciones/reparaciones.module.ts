import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReparacionesPageRoutingModule } from './reparaciones-routing.module';

import { ReparacionesPage } from './reparaciones.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReparacionesPageRoutingModule,
    SharedModule
  ],
  declarations: [ReparacionesPage]
})
export class ReparacionesPageModule {}
