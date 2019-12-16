import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/user.service';
import { UserDto } from '../models/user.dto';

@Component({
  selector: 'app-signin-facebook',
  templateUrl: './signin-facebook.page.html',
  styleUrls: ['./signin-facebook.page.scss'],
})
export class SigninFacebookPage implements OnInit {
  
  constructor(
    private router: Router,
    private authService: AuthService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    
  }

  facebookSignIn() {
    this.authService.facebookLogin().then(resp => {
      this.usersService.getUser(resp.user.uid).subscribe(usuario => {
        
        if(usuario) {
          console.log(usuario);
          this.authService.setLocalData(
            resp.user.uid,
            resp.user.displayName,
            resp.user.email,
            resp.user.photoURL
          );

          this.router.navigate(['/tabs/tab1']);
        } else {
          let userDto = new UserDto(
            resp.user.displayName,
            resp.user.email,
            resp.user.photoURL
          );

          this.usersService.createUser(resp.user.uid, userDto).then(usuarioCreado =>  {
            this.authService.setLocalData(
              resp.user.uid,
              resp.user.displayName,
              resp.user.email,
              resp.user.photoURL
            );

            this.router.navigate(['/tabs/tab1']);
          });
        }
       
      });

    });
  }
}
