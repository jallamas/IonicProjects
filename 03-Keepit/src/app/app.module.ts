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
import { CategoriasService } from './services/categorias.service';
import { NuevaCategoriaModalPage } from './nueva-categoria-modal/nueva-categoria-modal.page';
import { NuevaCategoriaModalPageModule } from './nueva-categoria-modal/nueva-categoria-modal.module';
import { EditCategoriaModalPageModule } from './edit-categoria-modal/edit-categoria-modal.module';
import { EditCategoriaModalPage } from './edit-categoria-modal/edit-categoria-modal.page';
import { AuthService } from './services/auth.service';
import { SigninFacebookPageModule } from './signin-facebook/signin-facebook.module';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [
    NuevaNotaModalPage,
    NuevaCategoriaModalPage,
    EditCategoriaModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.fireBase),
    AngularFirestoreModule,
    NuevaNotaModalPageModule,
    NuevaCategoriaModalPageModule,
    EditCategoriaModalPageModule,
    SigninFacebookPageModule,
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NotasService,
    CategoriasService,
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
