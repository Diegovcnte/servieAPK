import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';


//Firebase
import{AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot({mode:'md'}), 
    AppRoutingModule, 
    BrowserAnimationsModule, provideFirebaseApp(() => initializeApp({"projectId":"serviexpress-angular","appId":"1:125270380132:web:51dfa52a4787ad0204d971","storageBucket":"serviexpress-angular.appspot.com","apiKey":"AIzaSyDVQZRgt-FLJny-55ZI1XAwrW1JfsEx8Do","authDomain":"serviexpress-angular.firebaseapp.com","messagingSenderId":"125270380132"})), provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
  ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
