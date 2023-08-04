import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SocialUser, SocialAuthService, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{
  
  constructor(private router: Router,
    private socialAuthService: SocialAuthService) {
}
loginWithGoogle(){
  this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(() => this.router.navigate(['mainpage']));
}
  ngOnInit(): void {
  };
}
