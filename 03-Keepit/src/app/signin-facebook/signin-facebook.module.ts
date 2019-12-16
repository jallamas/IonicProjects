import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninFacebookPageRoutingModule } from './signin-facebook-routing.module';

import { SigninFacebookPage } from './signin-facebook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninFacebookPageRoutingModule
  ],
  declarations: [SigninFacebookPage]
})
export class SigninFacebookPageModule {}
