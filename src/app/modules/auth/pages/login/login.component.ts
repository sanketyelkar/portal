import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private loginService: LoginService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        this.emailValidator,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        this.passwordValidator,
      ]),
    });
  }

  onSignIn() {
    if (this.loginForm.valid) {
      this.loginService
        .login(
          this.loginForm.get('email')?.value,
          this.loginForm.get('password')?.value
        )
        .subscribe(
          (res: any) => {
            this.authService.setSessionToken('kjdjsfhjs', res);
          },
          (errorMessage: string) => {}
        );
    }
  }

  //Validators
  emailValidator(control: FormControl) {
    if (
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(control.value)
    ) {
      return null;
    }
    return { emailInvalid: true };
  }

  passwordValidator(control: FormControl) {
    if (
      /(?=(.*[0-9]))(?=.*[\\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/.test(
        control.value
      )
    ) {
      return null;
    }
    return { passwordInvalid: true };
  }
}
