import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MantenimientosPageRoutingModule } from './mantenimientos-routing.module';

import { MantenimientosPage } from './mantenimientos.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MantenimientosPageRoutingModule,
    SharedModule
  ],
  declarations: [MantenimientosPage]
})
export class MantenimientosPageModule {}
