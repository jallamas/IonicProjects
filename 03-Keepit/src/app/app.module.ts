import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { NotasService } from './services/notas.service';
import { NuevaNotaModalPageModule } from './nueva-nota-modal/nueva-nota-modal.module';
import { NuevaNotaModalPage } from './nueva-nota-modal/nueva-nota-modal.page';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [
    NuevaNotaModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.fireBase),
    AngularFirestoreModule,
    NuevaNotaModalPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NotasService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
