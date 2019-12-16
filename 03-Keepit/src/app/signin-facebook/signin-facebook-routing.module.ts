import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninFacebookPage } from './signin-facebook.page';

const routes: Routes = [
  {
    path: '',
    component: SigninFacebookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninFacebookPageRoutingModule {}
