import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { LogoComponent } from './logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CircleComponent } from './circle/circle.component';
import { PatronComponent } from './patron/patron.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BackgroundComponent } from './background/background.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { PopUpComponent } from './pop-up/pop-up.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CustomInputComponent,
    LogoComponent,
    CircleComponent,
    PatronComponent,
    ToolbarComponent,
    BackgroundComponent,
    ButtonsComponent,
    PopUpComponent,
  ],
  exports: [
    HeaderComponent,
    CustomInputComponent,
    LogoComponent,
    CircleComponent,
    PatronComponent,
    ToolbarComponent,
    BackgroundComponent,
    ReactiveFormsModule,
    ButtonsComponent,
    PopUpComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
