import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VersionPageRoutingModule } from './version-routing.module';

import { VersionPage } from './version.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VersionPageRoutingModule,
    SharedModule
  ],
  declarations: [VersionPage]
})
export class VersionPageModule {}
