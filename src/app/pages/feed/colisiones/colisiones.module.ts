import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColisionesPageRoutingModule } from './colisiones-routing.module';

import { ColisionesPage } from './colisiones.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColisionesPageRoutingModule,
    SharedModule
  ],
  declarations: [ColisionesPage]
})
export class ColisionesPageModule {}
