import { AuthServiceService } from './../../services/auth-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  SocialAuthService,
  SocialUser,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user!: SocialUser;
  socialUser!: SocialUser;
  formGroup!: FormGroup;
  showError: boolean = false;
  constructor(
    private authService: SocialAuthService,
    private auth: AuthServiceService,
    private router: Router
  ) {}
  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.isLogedIn();

    if (this.auth.isLogedIn()) {
      this.router.navigate(['admin']);
      return;
    }

    this.authService.authState.subscribe((user: any) => {
      this.user = user;
    });
    this.authService.authState.subscribe((user: any) => {
      this.socialUser = user;
    });
    this.initForm();

    sessionStorage.clear();
  }

  loginProcess() {
    if (this.formGroup.valid) {
      const body = this.formGroup.value;

      this.auth.login('/login', body).subscribe(
        (responce) => {
          if (responce) {
            sessionStorage.setItem('token', responce.token);

            this.router.navigate(['/admin']);

            console.log(responce);
          } else {
            alert('false');
          }
        },

        (err) => {
          // this.message = 'User/password does not exists.';

          this.showError = true;
        }
      );
    } else {
      alert('Invalid Details');
    }
  }
  isLogedIn() {}

  cancel() {
    this.formGroup.reset();
  }

  loginWithFacebook() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  loginWithGoggle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
